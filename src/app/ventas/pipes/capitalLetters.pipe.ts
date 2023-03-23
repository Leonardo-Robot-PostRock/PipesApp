import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalLetters'
})
export class CapitalLettersPipe implements PipeTransform {
  transform(value: string): string {
    return 'HOLA MUNDO!';
  }
}
