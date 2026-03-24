"use strict";
/*
class <nome_classe> {
  campo;
  constructor(campo: tipo) {
    this.campo = campo
  }
  metodo(): tipo {
  return <tipo>
  }
}
*/
Object.defineProperty(exports, "__esModule", { value: true });
/*
JavaScript:
function Pessoa(nome, sobrenome) {
   this.nome = nome;
   this.sobrenome = sobrenome;
}
 pessoa.prototype.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`
 }
 
 let pessoa = new Pessoa("Guilherme", "Fernando")
 console.log(pessoa.nomeCompleto())

*/
/*
TypeScript:
class Pessoa {
  nome: string
  sobrenome: string

  constructor(nome: string, sobrenome: string) {
  this.nome = nome
  this.sobrenome = sobrenome
  }

  nomeCompleto(): string {
   return `${this.nome} ${this.sobrenome}`
  }
}

const pessoa = new Pessoa('Guilherme', 'Fernando')
console.log(pessoa.nomeCompleto())

*/
// ===> Exemplo 1:
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
}
const pessoa = new Pessoa("Guilherme", "Fernando");
console.log(pessoa.nomeCompleto());
// ===> Exemplo 2: (sem constructor)
class Estudante {
}
// Criar um objeto ou a instancia dele
const estudante = new Estudante();
// Inicializar o objeto
estudante.codigoEstudante = 9785;
estudante.nomeEstudante = "Guilherme";
// Acessar os campos
console.log(`Código do estudante: ${estudante.codigoEstudante}`);
console.log(`Nome do estudaante: ${estudante.nomeEstudante}`);
// ===> Exemplo 3: (com constructor)
class Estudante_2 {
    // Definir o construtor
    constructor(codigoEstudante, nomeEstudante) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
    }
    // Criar o método
    listarEstudante() {
        console.log(`Código do estudante: ${this.codigoEstudante} e nome do estudante: ${this.nomeEstudante}`);
    }
}
// Acessar os campos
const estudante_2 = new Estudante_2(9689, "Alysa");
estudante_2.listarEstudante();
