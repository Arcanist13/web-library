import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitOnSeparator'
})
export class SplitOnSeparatorPipe implements PipeTransform {
  /**
   * Split a string on a seperator
   *
   * @param value     string to split
   * @param separator seperator token
   * @returns         seperated string
   */
  transform(value?: string, separator?: string): string {
    return value && separator ? value.split(separator).join(', ').trim() : '';
  }
}
