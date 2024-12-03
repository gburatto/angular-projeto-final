import {
  ApplicationConfig,
  importProvidersFrom,
  DEFAULT_CURRENCY_CODE,
  LOCALE_ID,
} from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { API_BASE, AuthModule } from '@nx-monorepo/auth';

import { appRoutes } from './app.routes';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt-BR');

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(AuthModule),
    provideRouter(
      appRoutes,
      withComponentInputBinding(),
    ),
    provideAnimationsAsync(),
    {
      provide: API_BASE,
      useValue: 'http://localhost:3333/api',
    },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ],
};
