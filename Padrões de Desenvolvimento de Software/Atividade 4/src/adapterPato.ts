import { Galinha } from "./igalinha";
import {Pato} from "./pato";

export class AdapterPato implements Galinha{
    pato: Pato;

    constructor(pato: Pato){
        this.pato = pato;
    }

    cacarejar(): void {
        this.pato.quack();
}
    bicar(): void {
        console.log("Pato não bica, mas pode voar... pato voando...");
    }
}
