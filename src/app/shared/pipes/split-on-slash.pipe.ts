import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitOnSlash'
})
export class SplitOnSlashPipe implements PipeTransform {
  transform(value?: string): string {
    return value ? value.split('/').join(', ').trim() : '';
  }
}
