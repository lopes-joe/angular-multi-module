import { Injectable } from '@angular/core';
import { Currency } from '../../models';

@Injectable()
export class CurrencyService {
  private currencies: Currency[];
  constructor(){};

  private currenciesObj = [ //http://fixer.io
	{ "code": "AUD", "description": "Dólar australiano" },
	{ "code": "BGN", "description": "Lev búlgaro" },
	{ "code": "BRL", "description": "Real brasileiro" },
	{ "code": "CAD", "description": "Dólar canadense" },
	{ "code": "CHF", "description": "Franco suíço" },
	{ "code": "CNY", "description": "Yuan Chinês" },
	{ "code": "CZK", "description": "Coroa República Tcheca" },
	{ "code": "DKK", "description": "Coroa dinamarquesa" },
	{ "code": "EUR", "description": "Euro" },
	{ "code": "GBP", "description": "Libra Esterlina" },
	{ "code": "HKD", "description": "Dólar de Hong Kong" },
	{ "code": "HRK", "description": "Coroa Croácia" },
	{ "code": "HUF", "description": "Florim húngaro" },
	{ "code": "IDR", "description": "Rupia indonésia" },
	{ "code": "ILS", "description": "Novo shekel israelense" },
	{ "code": "INR", "description": "Rupia indiana" },
	{ "code": "JPY", "description": "Iene japonês" },
	{ "code": "KRW", "description": "Won sul-coreano" },
	{ "code": "MXN", "description": "Peso mexicano" },
	{ "code": "MYR", "description": "Malásia Ringgit" },
	{ "code": "NOK", "description": "Coroa Noruega" },
	{ "code": "NZD", "description": "Dólar da Nova Zelândia" },
	{ "code": "PHP", "description": "Peso filipino" },
	{ "code": "PLN", "description": "Złoty Polónia" },
	{ "code": "RON", "description": "Leu romeno" },
	{ "code": "RUB", "description": "Belarus Ruble" },
	{ "code": "SEK", "description": "Coroa Suécia" },
	{ "code": "SGD", "description": "Dólar de Singapura" },
	{ "code": "THB", "description": "Baht Tailândia" },
	{ "code": "TRY", "description": "Lira turca" },
	{ "code": "USD", "description": "Dólar dos Estados Unidos" }, 
	{ "code": "ZAR", "description": "Rand África do Sul" }
  ];

  getAll(): Currency[] {
  	if (this.currencies) {
  		return this.currencies;
  	} 
  	this.currencies = [];
  	for (let currencyObj of this.currenciesObj) {
  		let currency: Currency = new Currency();
  		Object.assign(currency, currencyObj);
  		this.currencies.push(currency);
  	}
  	return this.currencies;
  }

}
