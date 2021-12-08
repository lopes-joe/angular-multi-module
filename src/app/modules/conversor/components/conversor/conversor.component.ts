import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Currency } from '../../models/currency.model';
import { Conversion } from '../../models/conversion.model';
import { ConversionResponse } from '../../models/conversion-response.model';
import { CurrencyService } from '../../services/currency/currency.service';
import { ConversorService } from '../../services/conversor/conversor.service';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {
  
  currencies : Currency[];
  conversion : Conversion;
  hasError: boolean;
  conversionResponse: ConversionResponse;

  @ViewChild("conversionForm") conversionForm: NgForm;

  constructor(
    private currencyService : CurrencyService,
    private conversorService : ConversorService
  ) { }

  ngOnInit(): void {
    this.currencies = this.currencyService.getAll();
    this.init();
  }

  init(): void {
    this.conversion = new Conversion('USD', 'BRL', null);
    this.hasError = false;
  }

  convert() : void {
    if (this.conversionForm.form.valid) {
      this.conversorService
        .converter(this.conversion)
        .subscribe(
          response => this.conversionResponse = response,
          error => this.hasError = true
        );
    }
  }

}
