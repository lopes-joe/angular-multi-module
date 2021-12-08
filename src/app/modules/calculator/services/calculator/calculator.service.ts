import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';
  // readonly indica que o valor não pode ser alterado
  // é boa prática criar constantes com letras maiúsculas
  // static permite que chamar um atributo ou método mesmo sem instanciá-lo

  calculate(num1: number, num2: number, operacao: string): number {
    let resultado: number;

    switch (operacao) {
      case CalculatorService.SOMA:
        resultado = num1 + num2;
        break;

      case CalculatorService.SUBTRACAO:
        resultado = num1 - num2;
        break;

      case CalculatorService.DIVISAO:
        resultado = num1 / num2;
        break;

      case CalculatorService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;

      default:
        resultado = 0;
    }
    return resultado;
  }

  constructor() {}
}
