import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: []
})
export class OrdenarComponent implements OnInit {
  inCapitalLetter: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  changeLetters() {
    this.inCapitalLetter = !this.inCapitalLetter;
  }
}
