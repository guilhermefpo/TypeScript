export {};

// ====> Exemplo 01: Interface Simples

interface Pessoa {
  nome: string;
  sobrenome: string;
  idade: number;
}

function exibirNome(pessoa: Pessoa): string {
  return `
       Nome: ${pessoa.nome}
       Sobrenome: ${pessoa.sobrenome}
       Idade: ${pessoa.idade}
        `;
}

const glaucia: Pessoa = {
  nome: "Glaucia",
  sobrenome: "Lemos",
  idade: 36,
};

console.log(exibirNome(glaucia));

// ====> Exemplo 02: Interface com Propriedades Opicionais

interface Livro {
  titulo: string;
  autor: string;
  paginas?: number;
}

const livro: Livro = {
  titulo: "Clean Code",
  autor: "Robert C. Martin",
};

console.log(livro);

// ====> Exemplo 03: Interface com propriedades se Somente Leitura e Opicionais

interface Carro {
  readonly modelo: string;
  ano: number;
  valor?: number;
}

const carro: Carro = {
  modelo: "Fusca",
  ano: 1969,
};

console.log(carro);
console.log(carro.modelo);

// carro.modelo = 'Fusca 2.0;'
// Vai dar erro:
// propriedades readonly não podem ser alteradas
// depois que recebem um valor.

// Exemplo 04: Interface com implements Class

interface IAnimal {
  nome: string;
  idade: number;
  estaVivo: boolean;
  comer(tipoComida: string): void;
}

// "A classe Gato deve implementar
// tudo que existe em IAnimal."

class Gato implements IAnimal {
  nome: string;
  idade: number;
  estaVivo: boolean;

  constructor(nome: string, idade: number, estaVivo: boolean) {
    this.nome = nome;
    this.idade = idade;
    this.estaVivo = estaVivo;
  }

  comer(tipoComida: string) {
    console.log(`O gato ${this.nome} está comendo ${tipoComida}`);
  }
}

const gato = new Gato("Totó", 10, true);
console.log(gato);
gato.comer("Ração");

// ====> Exemplo 05: Interface vs Alias Type

interface Pessoa2 {
  nome: string;
  sobrenome: string;
  idade: number;
}

type Pessoa3 = {
  nome: string;
  sobrenome: string;
  idade: number;
};

// extends → herança
// implements → contrato
