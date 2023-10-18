export class Veiculo{
    constructor(modelo,marca,cor, numeroRodas) {
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.numeroRodas = numeroRodas;
}

clone() {
    return new this.constructor(this.modelo,this.marca,this.cor,this.numeroRodas);
}
represent(){
    console.log(`Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, numeroRodas: ${this.numeroRodas}`);
}
}

export class Moto extends Veiculo{
    constructor(modelo,marca,cor,numeroRodas, cilindradas) {
        super(modelo,marca,cor,numeroRodas);
        this.cilindradas = cilindradas;
}
}

export class Carro extends Veiculo{
    constructor(modelo,marca,cor,numeroRodas, potencia, nmLugares) {
        super(modelo,marca,cor,numeroRodas);
        this.potencia = potencia;
        this.nmLugares = nmLugares;
    }
}
