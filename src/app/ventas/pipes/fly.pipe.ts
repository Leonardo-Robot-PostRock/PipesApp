import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fly'
})
export class FlyPipe implements PipeTransform {
  transform(fly: boolean = true): string {
    return fly ? 'fly' : "don't fly";
  }
}
