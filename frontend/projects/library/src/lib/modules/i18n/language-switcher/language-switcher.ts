import { Component, effect, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { APPLICATION_CONFIGURATION, DEFAULT_LANGUAGE } from '../../config/config.loader';
import { I18nApp } from '../../config/model/gnConfig';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';

@Component({
  selector: 'app-language-switcher',
  imports: [FormsModule, Select],
  templateUrl: './language-switcher.html',
})
export class LanguageSwitcher {
  i18nConfiguration: I18nApp = inject(APPLICATION_CONFIGURATION).config?.apps.i18n ?? {
    enabled: true,
    language: DEFAULT_LANGUAGE,
    languages: { DEFAULT_LANGUAGE: DEFAULT_LANGUAGE.substring(0, 2) },
  };

  languages = Object.entries(this.i18nConfiguration.languages).map(([key, value]) => ({
    iso3code: key,
    iso2code: value,
  }));

  currentLanguage = signal(this.i18nConfiguration.language);

  private translate = inject(TranslateService);

  constructor() {
    effect(() => {
      this.translate.use(this.i18nConfiguration.languages[this.currentLanguage()]);
    });
  }
}
