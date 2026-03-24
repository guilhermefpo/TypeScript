"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ===> Exemplo 01: Modificador public
class Estudante {
}
const estudante = new Estudante();
estudante.codigoEstudante = 8485;
estudante.nomeEstudante = "Guilherme";
console.log(`Código do estudante: ${estudante.codigoEstudante} e noome do estudante: ${estudante.nomeEstudante}`);
// ===> Exemplo 02: Modificador private
class Estudante_2 {
    constructor(codigoEstudante, nomeEstudante, idade) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
        this.idade = idade;
    }
    retornarDados() {
        return `Código do aluno: ${this.codigoEstudante}
          Nome do aluno: ${this.nomeEstudante}
          Idade do aluno: ${this.idade}`;
    }
}
const estudante_2 = new Estudante_2(868, "Alysa", 20);
estudante_2.retornarDados();
// ===> Exemplo 03: Modificador protected
class Estudante_3 {
    constructor(codigoEstudante, nomeEstudante) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
    }
}
class Pessoa extends Estudante_3 {
    constructor(codigoEstudante, nomeEstudante, curso) {
        super(codigoEstudante, nomeEstudante);
        this.curso = curso;
    }
    retornarDadosAluno() {
        return `Código do aluno: ${this.codigoEstudante}
  Nome do aluno: ${this.nomeEstudante}
  Matéria do estudante: ${this.curso}`;
    }
}
const estudante_03 = new Pessoa(85685, "Alysa Liu", "Matemática");
estudante_03.retornarDadosAluno();
