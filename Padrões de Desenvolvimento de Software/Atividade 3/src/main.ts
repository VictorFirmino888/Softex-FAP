import { isanduiche } from "./isanduiche";
import { Sanduiche } from "./Sanduiche";
import { Pepperoni, QueijoMussarelaRalado } from "./ingredientes";
import { FrangoAssado } from "./saborSanduiche";

const sanduba = new FrangoAssado();
const ingredientePepperoni = new Pepperoni();
const ingredienteQueijoMussarelaRalado = new QueijoMussarelaRalado();

const sabor = [sanduba];
const ingredientes = [ingredientePepperoni, ingredienteQueijoMussarelaRalado]

const sanduichePronto = new Sanduiche(sabor, ingredientes);


sanduichePronto.print();
