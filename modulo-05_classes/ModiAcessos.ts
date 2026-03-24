export {};

// ===> Exemplo 01: Modificador public

class Estudante {
  codigoEstudante!: number;
  nomeEstudante!: string;
}

const estudante = new Estudante();
estudante.codigoEstudante = 8485;
estudante.nomeEstudante = "Guilherme";

console.log(
  `Código do estudante: ${estudante.codigoEstudante} e nome do estudante: ${estudante.nomeEstudante}`,
);

// ===> Exemplo 02: Modificador private

class Estudante_2 {
  codigoEstudante: number;
  nomeEstudante: string;
  private idade: number;

  constructor(codigoEstudante: number, nomeEstudante: string, idade: number) {
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
  codigoEstudante: number;
  protected nomeEstudante: string;

  constructor(codigoEstudante: number, nomeEstudante: string) {
    this.codigoEstudante = codigoEstudante;
    this.nomeEstudante = nomeEstudante;
  }
}

class Pessoa extends Estudante_3 {
  private curso: string;

  constructor(codigoEstudante: number, nomeEstudante: string, curso: string) {
    super(codigoEstudante, nomeEstudante);
    this.curso = curso;
  }

  retornarDadosAluno(): string {
    return `Código do aluno: ${this.codigoEstudante}
  Nome do aluno: ${this.nomeEstudante}
  Matéria do estudante: ${this.curso}`;
  }
}

const estudante_03 = new Pessoa(85685, "Alysa Liu", "Matemática");
estudante_03.retornarDadosAluno();
