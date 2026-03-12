import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, finalize } from 'rxjs';
import { languages } from 'src/app/services/languages';
import {
  PayloadTranslate,
  TranslateService,
} from 'src/app/services/translate.service';

interface TranslationData {
  segment: string;
  translation: string;
  source: string;
  target: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  languageOptions: { label: string; value: string }[];
  translatorForm: FormGroup;
  showResult = new BehaviorSubject<boolean>(false);
  isLoading = new BehaviorSubject<boolean>(false);
  charCount = new BehaviorSubject<number>(0);

  translationData = new BehaviorSubject<TranslationData>({
    segment: '',
    translation: '',
    source: '',
    target: '',
  });

  constructor(private translateService: TranslateService) {
    this.languageOptions = languages;
    this.translatorForm = this.createTranslatorForm();
  }

  ngOnInit(): void {
    this.translatorForm.get('text')?.valueChanges.subscribe((value) => {
      this.charCount.next(value?.length || 0);
    });
  }

  private createTranslatorForm(): FormGroup {
    return new FormGroup({
      text: new FormControl('', [
        Validators.required,
        Validators.maxLength(500),
      ]),
      startLanguage: new FormControl(this.languageOptions[104].value),
      finalLanguage: new FormControl(this.languageOptions[40].value),
    });
  }

  switchLanguage(): void {
    const startLanguageValue = this.translatorForm.get('startLanguage')?.value;
    const finalLangagueValue = this.translatorForm.get('finalLanguage')?.value;

    this.translatorForm.patchValue({
      startLanguage: finalLangagueValue,
      finalLanguage: startLanguageValue,
    });

    // If there is already a translation, swap the result too
    if (this.showResult.value) {
      const currentData = this.translationData.value;
      this.translationData.next({
        ...currentData,
        segment: currentData.translation,
        translation: currentData.segment,
        source: currentData.target,
        target: currentData.source,
      });
      this.translatorForm.patchValue(
        { text: currentData.translation },
        { emitEvent: false },
      );
    }
  }

  displayLanguageLabel(valueParam: string): string {
    const language = this.languageOptions.find(
      ({ value }) => value === valueParam,
    );
    return language?.label ?? valueParam;
  }

  clearText(): void {
    this.translatorForm.get('text')?.setValue('');
    this.showResult.next(false);
  }

  copyToClipboard(text: string): void {
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {});
  }

  translate() {
    if (this.translatorForm.invalid || this.isLoading.value) return;

    this.isLoading.next(true);
    const payload: PayloadTranslate = this.translatorForm.getRawValue();

    this.translateService
      .translate(payload)
      .pipe(finalize(() => this.isLoading.next(false)))
      .subscribe({
        next: (data) => {
          this.showResult.next(true);
          this.translationData.next({
            segment: data.matches[0].segment,
            translation: data.matches[0].translation,
            source: data.matches[0].source,
            target: data.matches[0].target,
          });
        },
        error: (err) => {
          console.error('Translation error:', err);
        },
      });
  }
}
