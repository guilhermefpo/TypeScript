// Get - Acessar
// Set - Alterar

/*

Sintaxe - get:

get nomeAcesso() {
   // Código a ser executado obj.nomeAcesso
}


Sintaxe - set

set nomeAcesso(valor) {
    // Codigo executado na config
    // obj.nomeAcesso = valor (do setter)
}

*/

export {};

// ====>Exemplo 01: Get
class Quadrado {
  private _largura = 6;
  private _altura = 12;

  get calcularQuadrado() {
    return this._largura * this._altura;
  }
}

console.log(new Quadrado().calcularQuadrado);

// ====>Exemplo 02: Set
class Pessoa {
  nome!: string;

  retornarNomePessoa(setNomePessoa: string) {
    this.nome = setNomePessoa;
  }
}

const pessoa = new Pessoa();
pessoa.retornarNomePessoa("Alysa");
console.log("Meu nome é....: ", pessoa.nome);

//====>Exemplo 03: Get [Explicação mais densa]
class Estudante {
  private _nome = "Guilherme Fernando";
  private _semestre!: number;
  private _curso!: string;

  public get nomeEstudante() {
    return this._nome;
  }
} // Acessar o item de um objeto == get

const estudante = new Estudante();
const resultado = estudante.nomeEstudante;
console.log(resultado);

//====>Exemplo 04: Set/Get [explicação mais densa]
class Estudante_ {
  public nome: string;
  public semestre: number;
  public curso: string;

  constructor(
    nomeEstudante: string,
    semestreEstudante: number,
    cursoEstudante: string,
  ) {
    this.nome = nomeEstudante;
    this.semestre = semestreEstudante;
    this.curso = cursoEstudante;
  }

  public get cursos() {
    return this.curso;
  }

  public set cursos(setCurso: string) {
    this.curso = setCurso;
  }
}

const estudante_1 = new Estudante_("Guilherme Fernando", 2, "DSM");
console.log(Estudante_);

// Setter Call
estudante_1.curso = "ADS";

// Getter call
console.log("Curso atualizado....", estudante_1.curso);
