import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interefaces';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {
  transform(heroes: Heroe[]): Heroe[] {
    heroes = heroes.sort(function (a, b) {
      return a.name > b.name ? 1 : -1;
    });
    return heroes;
  }
}
