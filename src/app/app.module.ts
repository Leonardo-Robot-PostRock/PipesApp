import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//PrimeNgModule
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el locale de la app
import localeEsAr from '@angular/common/locales/es-AR';
import localeFr from '@angular/common/locales/fr';
import localeEsHn from '@angular/common/locales/es-HN';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEsAr);
registerLocaleData(localeFr);
registerLocaleData(localeEsHn);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRouterModule, SharedModule, VentasModule],
  providers: [{
    provide: LOCALE_ID, useValue: 'es-AR', 
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
