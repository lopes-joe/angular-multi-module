import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly data = [
    ['Janeiro', 33],
    ['Fevereiro', 44],
    ['Março', 55],
    ['Abril', 22],
    ['Maio', 11],
    ['Junho', 15],

  ]

  constructor() { }

  getData(): Observable<any> {
    return new Observable(observable => {
      observable.next(this.data);
      observable.complete();
    });
  }
}
