import { isanduiche } from "./isanduiche";

export class Pepperoni implements isanduiche {
    preco(): number {
        return 0.99;
    }
}

export class QueijoMussarelaRalado implements isanduiche{
    preco(): number {
        return 2.00;
    }
}