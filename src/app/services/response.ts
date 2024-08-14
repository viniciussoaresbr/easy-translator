export interface TranslationResponse {
  responseData: ResponseData;
  quotaFinished: boolean;
  mtLangSupported: any;
  responseDetails: string;
  responseStatus: number;
  responderId: any;
  exception_code: any;
  matches: Match[];
}

export interface ResponseData {
  translatedText: string;
  match: number;
}

export interface Match {
  id: string;
  segment: string;
  translation: string;
  source: string;
  target: string;
  quality: number;
  reference: any;
  'usage-count': number;
  subject: string;
  'created-by': string;
  'last-updated-by': string;
  'create-date': string;
  'last-update-date': string;
  match: number;
}
