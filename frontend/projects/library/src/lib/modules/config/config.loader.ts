import { UiConfiguration } from './model/gn4config';
import { InjectionToken } from '@angular/core';

export interface ApplicationConfiguration {
  ui: UiConfiguration | undefined;
  space: string;
}

export const DEFAULT_SPACE = 'srv';

export const APPLICATION_CONFIGURATION = new InjectionToken<ApplicationConfiguration>('app.config');

let appConfig: ApplicationConfiguration = {
  ui: undefined,
  space: DEFAULT_SPACE,
};

let appConfigLoading = false;

export function parseGn4Config(conf: any) {
  return JSON.parse(conf.configuration) as UiConfiguration;
}

export function loadAppConfig() {
  appConfigLoading = true;
  // TODO: /geonetwork should be configurable
  return fetch(`/geonetwork/srv/api/ui/${appConfig.space}`, {
    headers: {
      Accept: 'application/json',
    },
  })
    .then((resp) => {
      console.log(resp);
      if (!resp.ok) {
        //throw new Error('Configuration file could not be loaded')
        return '{}'; // TODO: Default config
      }
      return resp.json();
    })
    .then((conf) => {
      appConfig.ui = parseGn4Config(conf);
      console.log(appConfig);
      appConfigLoading = false;
    });
}
