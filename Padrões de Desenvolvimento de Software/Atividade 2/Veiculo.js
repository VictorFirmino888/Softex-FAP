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
    return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, numeroRodas: ${this.numeroRodas}`;
}
}

export class Moto extends Veiculo{
    constructor(modelo,marca,cor,numeroRodas, cilindradas) {
        super(modelo,marca,cor,numeroRodas);
        this.cilindradas = cilindradas;
}
clone() {
    return new this.constructor(this.modelo,this.marca,this.cor,this.numeroRodas,this.cilindradas);
    
}
represent(){
    return super.represent() + `, Cilindradas: ${this.cilindradas}`;
}
}

export class Carro extends Veiculo{
    constructor(modelo,marca,cor,numeroRodas, potencia, nmLugares) {
        super(modelo,marca,cor,numeroRodas);
        this.potencia = potencia;
        this.nmLugares = nmLugares;
    }
clone(){
    return new this.constructor(this.modelo,this.marca,this.cor,this.numeroRodas,this.potencia,this.nmLugares);
}
represent() {
    return super.represent() + `, Potencia: ${this.potencia}, Numero de Lugares: ${this.nmLugares}`;
}
}  

