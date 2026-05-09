export {};

abstract class Funcionario {
  constructor(
    private nome: string,
    private sobrenome: string,
  ) {}

  abstract retornarSalario(): number;

  get retornarNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }

  emitirContraCheque(): string {
    return `${this.retornarNomeCompleto} - Salário: ${this.retornarSalario()}`;
  }
}

// Classes abstratas  não podem ser instanciadas.

class FuncionarioCLT extends Funcionario {
  constructor(
    nome: string,
    sobrenome: string,
    private salario: number,
  ) {
    super(nome, sobrenome);
  }

  retornarSalario(): number {
    return this.salario;
  }
}

class FuncionarioPJ extends Funcionario {
  constructor(
    nome: string,
    sobrenome: string,
    private valorHora: number,
    private horasTrabalhadas: number,
  ) {
    super(nome, sobrenome);
  }

  retornarSalario(): number {
    return this.valorHora * this.horasTrabalhadas;
  }
}

const glaucia = new FuncionarioCLT("Glaucia", "Lemos", 8000);

const guilherme = new FuncionarioPJ("Guilherme", "Fernando", 150, 160);

const funcionarios: Funcionario[] = [glaucia, guilherme];

funcionarios.forEach((f) => {
  console.log(f.emitirContraCheque());
});
