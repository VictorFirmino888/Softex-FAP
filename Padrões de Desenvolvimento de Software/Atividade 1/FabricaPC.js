import { PC, Server, computador } from "./Computador.js";

class fabricaPC extends computador{
    criarComputador(tipo,ram,hdd,cpu) {
        if (tipo === 'PC') {
            return new PC(ram,hdd,cpu);
        }else if (tipo === 'Server') {
            return new Server(ram,hdd,cpu);
        }else {
            throw new Error("Tipo de máquina inexistente");
        }        
}
}

var fabrica = new fabricaPC();
var pc = fabrica.criarComputador('PC', 16, 512, 2.8);
var server = fabrica.criarComputador('Server', 32, 2000, 3.2);

console.log(pc.toString());
console.log(server.toString());
