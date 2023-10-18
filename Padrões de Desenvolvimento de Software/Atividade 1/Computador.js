export class computador{
    constructor(ram, hdd, cpu, tipo) {
        this.ram = ram;
        this.hdd = hdd;
        this.cpu = cpu;
        this.tipo = tipo;
}

toString() {
    return `Tipo: ${this.tipo}, RAM: ${this.ram}GB, HDD: ${this.hdd}GB, CPU: ${this.cpu}Ghz`;
}
}

export class PC extends computador{
    constructor(ram, hdd, cpu){
        super(ram, hdd, cpu, 'PC');
    }
}

export class Server extends computador{
    constructor(ram, hdd, cpu) {
        super(ram, hdd, cpu,'Server');
    }
}