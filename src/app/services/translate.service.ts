import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TranslationResponse } from './response';
import { Observable } from 'rxjs';

export interface PayloadTranslate {
  text: string;
  startLanguage: string;
  finalLanguage: string;
}

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  private readonly apiURL: string;
  constructor(private http: HttpClient) {
    this.apiURL = environment.apiUrl;
  }

  translate({
    text,
    startLanguage,
    finalLanguage,
  }: PayloadTranslate): Observable<TranslationResponse> {
    return this.http.get<TranslationResponse>(
      `${this.apiURL}/get?q=${text}&langpair=${startLanguage}|${finalLanguage}`
    );
  }
}
