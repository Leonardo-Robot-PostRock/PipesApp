import { Component, OnInit } from '@angular/core';
import { Colour, Heroe } from '../../interfaces/ventas.interefaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: []
})
export class OrdenarComponent {
  inCapitalLetter: boolean = true;
  orderBy: string = '';

  heroes: Heroe[] = [
    {
      name: 'Superman',
      fly: true,
      colour: Colour.blue
    },
    {
      name: 'Batman',
      fly: false,
      colour: Colour.black
    },
    {
      name: 'Robin',
      fly: false,
      colour: Colour.green
    },
    {
      name: 'Daredevil',
      fly: false,
      colour: Colour.red
    },
    {
      name: 'Linterna Verde',
      fly: true,
      colour: Colour.green
    }
  ];

  changeLetters() {
    this.inCapitalLetter = !this.inCapitalLetter;
  }

  changeOrder(value: string) {
    this.orderBy = value;
  }
}
