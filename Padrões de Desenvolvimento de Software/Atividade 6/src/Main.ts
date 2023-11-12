import { Controle } from "./Observer";
import { TextEditor } from "./TextEditor";

const prompt = require("prompt-sync")();
const textEditor = new TextEditor();
const controle = new Controle();

textEditor.notificar("open");
console.log('Abertura de arquivo', textEditor.getLines().join('\n'));
textEditor.addObserver(controle);

console.log('Digite linhas de texto. Digite "EOF" para finalizar.');

let lineNumber = 0;
let userInput = "";

while (userInput?.toLowerCase() !== "eof") {
  userInput = prompt(`Digite o texto para a linha ${lineNumber}: `);
  if (userInput !== null && userInput?.toLowerCase() !== "eof") {
    textEditor.insertLine(lineNumber++, userInput);
  }
}


textEditor.save();

console.log('Conteúdo do arquivo:', textEditor.getLines().join('\n'));
