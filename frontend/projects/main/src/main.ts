import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { loadAppConfig } from 'gn-library';

loadAppConfig().then((config: any) => {
  bootstrapApplication(App, appConfig).catch((err) => console.error(err));
});
