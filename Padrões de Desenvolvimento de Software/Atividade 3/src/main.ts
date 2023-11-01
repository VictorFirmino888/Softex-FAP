import { isanduiche } from "./isanduiche";
import { Sanduiche } from "./Sanduiche";
import { Pepperoni, QueijoMussarelaRalado } from "./ingredientes";
import { FrangoAssado } from "./saborSanduiche";

const sanduba = new FrangoAssado();
const ingredientePepperoni = new Pepperoni();
const ingredienteQueijoMussarelaRalado = new QueijoMussarelaRalado();

const sanduichePronto = new Sanduiche();

sanduichePronto.addSabor(sanduba);
sanduichePronto.addIngrediente(ingredientePepperoni);
sanduichePronto.addIngrediente(ingredienteQueijoMussarelaRalado);

sanduichePronto.print();
