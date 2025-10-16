import { Observable, of } from 'rxjs';

export class MockTranslateService {
  public currentLang = 'en';

  private readonly translations: Record<string, string> = {
    'group-1': 'Odatis',
    dataset: 'Dataset',
  };

  public instant = (key: string | string[], _interpolateParams?: object): string =>
    this.translations[key.toString()] || key.toString();

  public get = (key: string | string[], _interpolateParams?: object): Observable<string> =>
    of(this.translations[key.toString()] || key.toString());

  public use = (lang: string): Observable<null> => {
    this.currentLang = lang;
    return of(null);
  };
}
