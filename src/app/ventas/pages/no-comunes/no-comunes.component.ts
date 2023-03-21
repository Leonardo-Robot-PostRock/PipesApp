import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: []
})
export class NoComunesComponent {
  // i18nSelect
  name: string = 'Malala Yousafzai';
  gender: string = 'femenino';

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  };

  // i18nPlural
  customer: string[] = ['Maria', 'Norberto', 'Perez'];
  customersMap: { [k: string]: string } = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando'
  };
}
