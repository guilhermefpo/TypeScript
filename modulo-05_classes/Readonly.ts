export {};

// ===> Exemplo 01:
class Funcionario {
  readonly dataNascimento: Date;

  constructor(dataNascimento: Date) {
    this.dataNascimento = dataNascimento;
  }
}

const funcionario = new Funcionario(new Date(2006, 9, 12));

// ===> Exemplo 02:
class funcionario_2 {
  constructor(readonly dataNascimento: Date) {
    this.dataNascimento = dataNascimento;
  }
}

// ===> Exemplo 03:
class funcionario_3 {
  nome: string;
  readonly codigoFuncionario: number;

  constructor(nome: string, codigo: number) {
    this.codigoFuncionario = codigo;
    this.nome = nome;
  }
}

const func = new funcionario_3("Alysa Liu", 63637);
// Vc não consegue mudar readonly
// Somente com constructor.
console.log(func);

// ===> Exemplo 04 - Interface:
interface Ifuncionario {
  codigoFuncionario: number;
  nomeFuncionario: string;
}
// Possivel definir como readonly:

const func_1: Readonly<Ifuncionario> = {
  codigoFuncionario: 857484,
  nomeFuncionario: "Jane",
};

// Como acessar:

const func_: Ifuncionario = {
  codigoFuncionario: 857484,
  nomeFuncionario: "Jane",
};

func_.codigoFuncionario = 859444;
func_.nomeFuncionario = "Jane Oliveira";
