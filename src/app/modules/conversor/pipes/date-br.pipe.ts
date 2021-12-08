import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateBr'
})
export class DateBrPipe implements PipeTransform {

  transform(dateEn: string): string {
    if(!dateEn) {
      return '';
    }
    const dateArr = dateEn.split('-');
    if (dateArr.length !== 3) {
      console.log('Entrou no pipe');
      return dateEn;
    } 

    return dateArr[2] + '/' + dateArr[1] + '/' + dateArr[0];
  }

}
