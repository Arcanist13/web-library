import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'niceKeyString'
})
export class NiceKeyStringPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace('_', ' ');
  }

}
