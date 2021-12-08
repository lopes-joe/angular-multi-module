import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conversion } from '../../models/conversion.model';
import { ConversionResponse } from '../../models/conversion-response.model';


@Injectable({
  providedIn: 'root',
})
export class ConversorService {
  private readonly BASE_URL =
    'http://data.fixer.io/api/latest?access_key=eba7130a5b2d720ce43eb5fcddd47cc3';
  
  constructor(private http: HttpClient) {}

  converter(conversion: Conversion): Observable<any> {
    let params = `&base=${conversion.currencyFrom}&symbols=${conversion.currencyTo}`;
    return this.http.get(this.BASE_URL + params);
  }

  priceTo(
    conversionResponse: ConversionResponse,
    conversion: Conversion
  ): number {
    if (conversionResponse === undefined) {
      return 0;
    }
    return conversionResponse.rates[conversion.currencyTo];
  }

  priceFrom(
    conversionResponse: ConversionResponse,
    conversion: Conversion
  ): string {
    if (conversionResponse === undefined) {
      return '0';
    }
    return (1 / conversionResponse.rates[conversion.currencyTo]).toFixed(4);
  }

  priceDate(conversionResponse: ConversionResponse): string {
    if (conversionResponse === undefined) {
      return '';
    }
    return conversionResponse.date;
  }
}