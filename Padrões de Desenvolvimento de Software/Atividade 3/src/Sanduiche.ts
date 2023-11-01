import { isanduiche } from "./isanduiche";
import { Pepperoni,QueijoMussarelaRalado } from "./ingredientes";
import { FrangoAssado } from "./saborSanduiche";

export class Sanduiche implements isanduiche{
    private sabor: isanduiche[];
    private ingredientes: isanduiche[];


    constructor(sabor: isanduiche[], ingredientes: isanduiche[]){
        this.sabor = sabor;
        this.ingredientes = ingredientes;
    }

    addSabor(sabor: isanduiche) {
        this.sabor.push(sabor);
    }
    addIngrediente(ingrediente: isanduiche) {
        this.ingredientes.push(ingrediente);
    }

preco(): number{
    let valor = 0;
    for (const sabor of this.sabor) {
        valor += sabor.preco();
    }
    for (const ingrediente of this.ingredientes)   {
        valor += ingrediente.preco();
    } 

return valor;
}

print(): void{
    let descricao = "Sanduiche de";
    for (const sabor of this.sabor) {
        descricao += ` ${sabor.constructor.name}, `;
}

if (this.ingredientes.length > 0) {
    descricao += "com ";
    for (const ingrediente of this.ingredientes) {
        descricao += `${ingrediente.constructor.name}, `;
    }
descricao = descricao.slice(0, -2)
console.log(`${descricao} custa R$ ${this.preco().toFixed(2)}`);
}
}
}