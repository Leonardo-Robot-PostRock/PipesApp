import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interefaces';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {
  transform(heroes: Heroe[], orderBy: string = 'valueless'): Heroe[] {
    switch (orderBy) {
      case 'name':
        return heroes.sort((a, b) => (a.name > b.name ? 1 : -1));
      case 'fly':
        return heroes.sort((a, b) => (a.fly > b.fly ? -1 : 1));
      case 'colour':
        return heroes.sort((a, b) => (a.colour > b.colour ? 1 : -1));
      default:
        return heroes;
    }
  }
}
