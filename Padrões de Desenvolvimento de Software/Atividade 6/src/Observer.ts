import { Observer } from "./iObserver";

export class Controle implements Observer {
  update(event: string, data?: any): void {
    switch (event) {
      case "insertLine":
        console.log(`Linha ${data.lineNumber} inserida: "${data.text}"`);
        break;
      case "removeLine":
        console.log(`Linha ${data.lineNumber} removida`);
        break;
      case "save":
        console.log("Conteúdo salvo:", data.content);
        break;
      default:
        break;
    }
  }
}
