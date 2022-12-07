import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'niceKeyString'
})
export class NiceKeyStringPipe implements PipeTransform {
  /**
   * Convert a field to a nicer string, expecting fields with multiple words to be seperated by '_'
   *
   * @param value field name
   * @returns     nicer field name
   */
  transform(value: string): string {
    return value.replace('_', ' ');
  }
}
