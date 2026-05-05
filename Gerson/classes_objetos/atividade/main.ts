import Empresa from "./Empresa";
import Endereco from "./Endereco";
import Telefone from "./Telefone";

let endereco = new Endereco("123", "Rua das Flores", "Centro", "São Paulo");
let telefone = new Telefone("11", "99999-9999");
let telefone2 = new Telefone("11", "99999-9999");
let empresa = new Empresa("Empresa 1", "Empresa 1", "1234567890", endereco, [
  telefone,
  telefone2,
]);
console.log(empresa);
