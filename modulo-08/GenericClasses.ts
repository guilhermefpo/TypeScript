export {};

// ====> Exemplo 01: Generic Classes

class Box<T> {
  private item: T;

  constructor(item: T) {
    this.item = item;
  }

  getItem(): T {
    return this.item;
  }

  setItem(item: T): void {
    this.item = item;
  }
}

const boxString = new Box<string>("Guilherme Fernando");

const boxNumber = new Box<number>(19);

console.log(boxString.getItem()); // Guilherme Fernando
console.log(boxNumber.getItem()); // 19

// ====> Exemplo 02:

class Estudante<T, U> {
  private id: T;
  private nome: U;

  constructor(id: T, nome: U) {
    this.id = id;
    this.nome = nome;
  }

  setValor(id: T, nome: U): void {
    this.id = id;
    this.nome = nome;
  }

  retornarValor(): void {
    console.log(
      `Identificação do Estudante...: ${this.id}, Nome do Estudante...: ${this.nome}`,
    );
  }
}

const estudante = new Estudante<number, string>(101, "Guilherme");

estudante.retornarValor();

const estudanteSecundario = new Estudante<string, string>("202", "Alysa");

estudanteSecundario.retornarValor();
