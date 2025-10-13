import { elasticsearch } from 'gn-api-client';

export interface AppsConfiguration {
  apps: Apps;
}

export interface Apps {
  search?: SearchApp;
}

export interface App {
  enabled: boolean;
}

export interface SearchApp extends App {
  aggregations: (string | Record<string, elasticsearch.AggregationsAggregationContainer>)[];
  advanced?: SearchAppAdvanced;
}

export interface SearchAppAdvanced {
  score: string;
}
