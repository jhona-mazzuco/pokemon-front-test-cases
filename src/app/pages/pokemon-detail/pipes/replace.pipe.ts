import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {
  transform(value: string, character: string, toCharacter: string): string {
    return value.replace(character, toCharacter);
  }
}
