import { bootstrapApplication } from '@angular/platform-browser';
import { getAppConfig } from './app/app.config';
import { App } from './app/app';
import { loadAppConfig } from 'gn-library';

loadAppConfig().then((config: any) => {
  bootstrapApplication(App, getAppConfig(config)).catch((err) => console.error(err));
});
