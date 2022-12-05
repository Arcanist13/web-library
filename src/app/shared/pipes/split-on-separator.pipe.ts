import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitOnSeparator'
})
export class splitOnSeparatorPipe implements PipeTransform {
  transform(value?: string, separator?: string): string {
    return value && separator ? value.split(separator).join(', ').trim() : '';
  }
}
