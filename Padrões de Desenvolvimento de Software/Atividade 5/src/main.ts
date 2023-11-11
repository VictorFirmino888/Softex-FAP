import { Calculadora } from "./calculadora";
import { Multiplacao, Soma, Subtracao } from "./operacoes";

const prompt = require('prompt-sync')();
const x = Number(prompt("Informe o primeiro valor: "));
const y = Number(prompt("Informe o segundo valor: "));
const op = prompt("Informe a operação que deseja realizar(soma, subtração ou multiplicação): ");

let calculadora;

switch (op) {
  case "soma":
  case "+":
    calculadora = new Soma();
    break;
  case "subtração":
  case "-":
    calculadora = new Subtracao();
    break;
  case "multiplicação":
  case "*":
    calculadora = new Multiplacao();
    break;
  default:
    console.log("Operação matemática inválida");
}

const resultado = calculadora?.execute(x, y);
console.log(`Resultado da operação: ${resultado}`);

