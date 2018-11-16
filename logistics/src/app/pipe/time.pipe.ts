import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: number, args?: any): string {
    const hours = Math.floor(value / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((value % 3600) / 60).toString().padStart(2, '0');
    const seconds = (value % 60).toString().padStart(2, '0');
    return hours + ':' + minutes + ':' + seconds;
  }

}
