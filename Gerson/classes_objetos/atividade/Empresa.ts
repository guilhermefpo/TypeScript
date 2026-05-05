import Endereco from "./Endereco";
import Telefone from "./Telefone";

export default class Empresa {
  private razaoSocial: string;
  private nomeFantasia: string;
  private cnpj: string;
  private endereco: Endereco;
  private telefone: Telefone[];
  constructor(
    razaoSocial: string,
    nomeFantasia: string,
    cnpj: string,
    endereco: Endereco,
    telefone: Telefone[],
  ) {
    this.razaoSocial = razaoSocial;
    this.nomeFantasia = nomeFantasia;
    this.cnpj = cnpj;
    this.endereco = endereco;
    this.telefone = telefone;
  }
}
