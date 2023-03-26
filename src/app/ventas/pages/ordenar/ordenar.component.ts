import { Component, OnInit } from '@angular/core';
import { Colour, Heroe } from '../../interfaces/ventas.interefaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: []
})
export class OrdenarComponent {
  inCapitalLetter: boolean = true;

  heroes: Heroe[] = [
    {
      name: 'Superman',
      fly: true,
      colour: Colour.azul
    },
    {
      name: 'Batman',
      fly: false,
      colour: Colour.negro
    },
    {
      name: 'Robin',
      fly: false,
      colour: Colour.verde
    },
    {
      name: 'Daredevil',
      fly: false,
      colour: Colour.rojo
    },
    {
      name: 'Linterna Verde',
      fly: true,
      colour: Colour.verde
    }
  ];

  changeLetters() {
    this.inCapitalLetter = !this.inCapitalLetter;
  }
}
