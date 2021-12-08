import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorComponent } from '../conversor/components/conversor/conversor.component';
import { CurrencyService } from './services/currency/currency.service';
import { ConversorService } from './services/conversor/conversor.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NumberDirective } from './directives/number.directive';
import { ModalPriceComponent } from './components/modal-price/modal-price.component';
import { DateBrPipe } from './pipes';

@NgModule({
  declarations: [
    ConversorComponent,
    NumberDirective,
    ModalPriceComponent,
    DateBrPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    ConversorComponent
  ],
  providers : [
    CurrencyService,
    ConversorService
  ]
})
export class ConversorModule { }
