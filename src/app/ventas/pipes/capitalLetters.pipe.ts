import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalLetters'
})
export class CapitalLettersPipe implements PipeTransform {
  transform(value: string, inCapitalLetters: boolean = false): string {
    return inCapitalLetters ? value.toUpperCase() : value.toLowerCase();
  }
}
