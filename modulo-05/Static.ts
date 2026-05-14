export {};

// ====> Exemplo 01: Propriedade Estáticas
class Funcionario {
  static contratacoes: number = 0;
  constructor(
    private nome: string,
    private sonrenome: string,
    private titulo: string,
  ) {
    Funcionario.contratacoes++;
  }
}

const funcionario_01 = new Funcionario(
  "Guilherme",
  "Fernando",
  "Desenvolvedor",
);

const funcionario_02 = new Funcionario("Jurema", "Lemos", "Professora");

console.log(Funcionario.contratacoes);

// ====> Exemplo 02 - Métodos Estáticas
class Funcionario_ {
  private static contratacoes = 0;

  constructor(
    private nome: string,
    private sonrenome: string,
    private titulo: string,
  ) {
    // Nome da classe + nome da propriedade
    Funcionario_.contratacoes++;
  }
  public static retornarContratacoes() {
    return Funcionario_.contratacoes;
  }
}

const funcionario_03 = new Funcionario_(
  "Guilherme",
  "Fernando",
  "Desenvolvedor",
);

const funcionario_04 = new Funcionario_("Jurema", "Lemos", "Professora");

// Nome da classe + Nome do Método

console.log(Funcionario_.retornarContratacoes());

// ====> Exemplo 03 - Propriedades Estáticas
type Raca = "Splitz Alemão" | "Buldogue" | "Pug" | "Yorkshi" | "Poodle";

class Cachorro {
  public nome: string;
  public idade: number;
  public racas: Raca[];
  public static QTD_CACHORRO_VENDIDO = 0;

  constructor(nome: string, idade: number, racas: Raca[]) {
    this.nome = nome;
    this.idade = idade;
    this.racas = racas;
    Cachorro.QTD_CACHORRO_VENDIDO++;
    console.log(Cachorro.QTD_CACHORRO_VENDIDO);
  }

  public exibirInformacao(): void {
    console.log(`O cachorro  ${this.nome} tem ${this.idade}.`);
  }
}

const cachorro_01 = new Cachorro("Pipoca", 4, ["Splitz Alemão"]);
const cachorro_02 = new Cachorro("Farofa", 6, ["Yorkshi"]);
