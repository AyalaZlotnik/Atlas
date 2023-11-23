import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { StoreModule, provideStore } from '@ngrx/store';
import { appReducer } from '../ngrx/movies.reducer';

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideNzI18n(en_US),
    importProvidersFrom(
      StoreModule.forRoot({
        app: appReducer,
      })
    ),
    importProvidersFrom(FormsModule),
    importProvidersFrom(HttpClientModule),
    provideStore({ app: appReducer }),

    provideAnimations(),
  ],
};
