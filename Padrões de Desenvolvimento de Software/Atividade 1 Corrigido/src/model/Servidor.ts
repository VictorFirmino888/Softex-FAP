import { Computador } from "./Computador";

export class Servidor extends Computador{
    private sistemaRAID: string;
    private so: string;

    constructor(CPU: number, memoria: number, armazenamento: number, tipo:string, preco: number,sistemaRAID?: string, so?: string) {
        super(CPU, memoria, armazenamento, tipo, preco);
        this.sistemaRAID = (sistemaRAID || "RAID 0");
        this.so = (so || "CentOS");
}

getsistemaRAID(): string {
    return this.sistemaRAID;
}

setsistemaRAID(sistemaRAID: string) {
    this.sistemaRAID = sistemaRAID;
}

getSO(): string {
    return this.so;
}

setSO(so: string){
    this.so = so;
}

override toString(): string {
    return `Servidor: CPU ${this.getCPU()}GHz | Memória ${this.getMemoria()}GB | SSD ${this.getArmazenamento()}GB | Sistema RAID ${this.sistemaRAID} | Sistema Operacional ${this.so} | Preço R$ ${this.preco}`;
}
}