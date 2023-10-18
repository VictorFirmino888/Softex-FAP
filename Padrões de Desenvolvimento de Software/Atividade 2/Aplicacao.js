import { Veiculo,Moto, Carro } from "./Veiculo.js";

class App {
    static criarVeiculo() { 
        const veiculo = [];
        const carro1 = new Carro("Uno","Fiat","branco",4, "77cv", 5);
        const moto1 = new Moto("Ninja","Kawasaki","verde",2,"1043cc");
        const carro2 = new Carro("Gol","Volkswagen","vermelho",4, "80cv", 5);
        const moto2 = new Moto("Fazer","Yamaha","preta",2,"250cc");
        const carro3 = new Carro("Doblô","Fiat","azul", 4, "81cv", 7);
        const moto3 = new Moto("CG-Titan","Honda","preta",2,"160cc");

        veiculo.push(moto1,moto2,moto3,carro1,carro2,carro3);
        return veiculo;
}

static clonarVeiculo(veiculo){
    const clones = [];
    for (let i = 0; i < veiculo.length; i++) {
        clones.push(veiculo[i].clone());
    }
    return clones;

}

static imprimirVeiculo(veiculo){
    for (let i = 0; i < veiculo.length; i++) {
        console.log(veiculo[i].represent());
    }

}
}

const veiculo = App.criarVeiculo();

const clones = App.clonarVeiculo(veiculo);

App.imprimirVeiculo(clones);