export default class Endereco {
  private numero: string;
  private rua: string;
  private bairro: string;
  private cidade: string;
  constructor(numero: string, rua: string, bairro: string, cidade: string) {
    this.numero = numero;
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
  }
}
