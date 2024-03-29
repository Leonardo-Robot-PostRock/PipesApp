import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { CapitalLettersPipe } from './pipes/capitalLetters.pipe';
import { FlyPipe } from './pipes/fly.pipe';
import { OrderPipe } from './pipes/ordenar.pipe';

@NgModule({
  declarations: [
    //components
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent,

    //pipes
    CapitalLettersPipe,
    FlyPipe,
    OrderPipe
  ],
  exports: [NumerosComponent, NoComunesComponent, BasicosComponent, OrdenarComponent],
  imports: [PrimeNgModule, CommonModule]
})
export class VentasModule {}
