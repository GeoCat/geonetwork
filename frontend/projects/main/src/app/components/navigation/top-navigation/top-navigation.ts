import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';

import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { faUser } from '@ng-icons/font-awesome/regular';
import { APPLICATION_CONFIGURATION, DEFAULT_LANGUAGE, I18nApp } from 'gn-library';
import { TranslateService } from '@ngx-translate/core';
import { Select } from 'primeng/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.html',
  styleUrl: './top-navigation.scss',
  standalone: true,
  viewProviders: [provideIcons({ faUser })],
  imports: [ButtonModule, StyleClassModule, RouterLink, NgIcon, Select, FormsModule],
})
export class TopNavigation {
  i18nConfiguration: I18nApp = inject(APPLICATION_CONFIGURATION).config?.apps.i18n ?? {
    enabled: true,
    language: DEFAULT_LANGUAGE,
    languages: { eng: 'en' },
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

  logo = '/images/logo.svg';
}
