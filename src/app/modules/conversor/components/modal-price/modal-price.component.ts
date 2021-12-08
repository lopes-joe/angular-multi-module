import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Conversion} from '../../models';
import { ConversionResponse } from '../../models/conversion-response.model';
import { ConversorService } from '../../services/conversor';

@Component({
  selector: 'modal-price',
  templateUrl: './modal-price.component.html',
  styleUrls: ['./modal-price.component.css']
})
export class ModalPriceComponent implements OnInit {

  @Input() id: string;
  @Input() conversionResponse : ConversionResponse;
  @Input() conversion: Conversion = new Conversion();
  @Output() onConfirm: EventEmitter<any> = new EventEmitter<any>();

  constructor(private conversorService: ConversorService) { }

  ngOnInit(): void {
  }

  newSearch(){
    this.onConfirm.emit();
  }

  get convertedAmount(): string {
    if(this.conversionResponse === undefined) {
      return '0';
    }    
    return (
      this.conversion.amount * this.conversionResponse.rates[this.conversion.currencyTo]
      )
      .toFixed(2);
  }

  get priceTo(): number {
    return this.conversorService.priceTo(
      this.conversionResponse, this.conversion
    )
  }

  get priceFrom(): string {
    return this.conversorService.priceFrom(
      this.conversionResponse, this.conversion
    );
  }

  get priceDate(): string {
    return this.conversorService.priceDate(
      this.conversionResponse
    );
  }


}
