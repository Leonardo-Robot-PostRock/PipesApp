import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'leonardo';
  nombreUpper: string = 'LEONARDO';
  nombreCompleto: string = 'lEoNARdo pueBla';

  fecha: Date = new Date();
}
