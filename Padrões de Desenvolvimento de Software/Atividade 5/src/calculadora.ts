import { icalculadora } from "./iCalculadora";



export class Calculadora {
    private calculadora: iCalculadora;
  
    constructor(calculadora: iCalculadora) {
      this.calculadora = calculadora;
    }
  
    calculo(x: number, y: number): number {
      return this.calculadora?.execute(x, y);
    }
  }