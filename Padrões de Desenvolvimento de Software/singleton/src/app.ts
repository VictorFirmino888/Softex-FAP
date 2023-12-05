import { SistemaSeguranca } from "./SistemaSeguranca";

const sistemaSeguranca = SistemaSeguranca.getInstance("1234");

const senhaAgente = "1234";

const acessoPermitido = sistemaSeguranca.acessarBaseSecreta(senhaAgente);

console.log(acessoPermitido);