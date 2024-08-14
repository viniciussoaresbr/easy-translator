import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
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

  ngOnInit(): void {}

  private createTranslatorForm(): FormGroup {
    return new FormGroup({
      text: new FormControl('', [Validators.required, Validators.max(500)]),
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
  }

  displayLanguageLabel(valueParam: string): string {
    const language = this.languageOptions.find(
      ({ value }) => value === valueParam
    );
    return language?.label ?? valueParam;
  }

  translate() {
    const payload: PayloadTranslate = this.translatorForm.getRawValue();
    this.translateService.translate(payload).subscribe((data) => {
      this.showResult.next(true);
      this.translationData.next({
        segment: data.matches[0].segment,
        translation: data.matches[0].translation,
        source: data.matches[0].source,
        target: data.matches[0].target,
      });
    });
  }
}
