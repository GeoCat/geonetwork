import { elasticsearch } from 'gn-api-client';

export interface AppsConfiguration {
  apps: Apps;
}

export interface Apps {
  search?: SearchApp;
  i18n?: I18nApp;
}

export interface App {
  enabled: boolean;
}

export interface I18nApp extends App {
  languages: {
    [iso3code: string]: string;
  };
  language: string;
  detection?: 'browser' | 'url' | 'html' | 'none';
}

export interface SearchApp extends App {
  topTabFilter?: string;
  aggregations: (string | Record<string, elasticsearch.AggregationsAggregationContainer>)[];
  advanced?: SearchAppAdvanced;
}

export interface SearchAppAdvanced {
  score: string;
}
