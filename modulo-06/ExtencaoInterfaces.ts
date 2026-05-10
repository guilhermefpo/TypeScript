// Eliminar a necessidade de repetir os menbros de outros tipos em outras interfaces.
// Não precisa replicar o mesmo código em multiplos arquivos.

export {};

// ====> Exemplo 01: Interfaces com extends

interface Animal {
  nome: string;
  idade: number;
  porte: string;
}

interface Cachorro extends Animal {
  raca: string;
}

const cachorro: Cachorro = {
  nome: "Thor",
  idade: 6,
  porte: "Médio",
  raca: "Shitsu",
};

console.log(cachorro);

// ====> Exemplo 02: Extenção com multiplas interfaces

interface HarryPotter {
  nome: string;
}

interface Batman {
  nome: string;
}

interface Livro extends HarryPotter, Batman {
  autor: string;
}

const harry: Livro = {
  nome: "Harry Potter",
  autor: "JK. Rowling",
};

console.log(harry);

// ====> Exemplo 03: Uso do Omit

interface Funcionario {
  id: number;
  nome: string;
  salario: number;
}

interface Desenvolvedor extends Omit<Funcionario, "id" | "salario"> {
  id: string;
  salario: string;
  linguagemProgramacao: string;
}

const desenvolvedor: Desenvolvedor = {
  id: "js-123",
  nome: "Guilherme Fernando",
  salario: "10k",
  linguagemProgramacao: "TypeScript",
};

console.log(desenvolvedor);
