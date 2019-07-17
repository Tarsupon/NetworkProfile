import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onlineStatus'
})
export class OnlineStatusPipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {
    if (value === null) return '';
    return (value === 0) ? 'Offline' : 'Online';
  }


}
