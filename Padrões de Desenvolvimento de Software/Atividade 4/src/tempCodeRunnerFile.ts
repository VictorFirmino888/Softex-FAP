import { AdapterPato } from "./adapterPato";
import { Pato } from "./pato";

class AdapterPatoDemo {
    static main(): void {
        const pato = new Pato
        const adapter = new AdapterPato(pato)

        console.log("Usando Pato como Galinha"
        adapter.cacarejar();
        adapter.bicar();
}
}

AdapterPatoDemo.main();


