export {};

// Podemos restringir certos tipos usando constraints
// extends

// ====> Exemplo 01: Generics Constrants

interface Pessoa {
  nome: string;
  idade: number;
}

function obterPessoaIdadeMaiorQue<T extends Pessoa>(
  pessoas: T[],
  idade: number,
): T[] {
  return pessoas.filter((pessoa) => pessoa.idade > idade);
}

const pessoas: Pessoa[] = [
  { nome: "Glaucia", idade: 36 },
  { nome: "Alysa", idade: 21 },
  { nome: "Guilherme", idade: 19 },
  { nome: "Elias", idade: 19 },
];

const resultado = obterPessoaIdadeMaiorQue(pessoas, 20);

console.log(resultado);

// ====> Exemplo 02: Generics Constrants

function juntarObjetos<u, v>(objeto1: u, objeto2: v) {
  return {
    ...objeto1,
    ...objeto2,
  };
}

const pessoa = juntarObjetos(
  {
    nome: "Alysa",
  },
  {
    idade: 21,
  },
);

console.log(pessoa);

const pessoa2 = juntarObjetos(
  {
    nome: "Ana",
  },
  45,
);

console.log(pessoa2); // ERRO

function juntarObjetos2<u extends object, v extends object>(
  objeto1: u,
  objeto2: v,
) {
  return {
    ...objeto1,
    ...objeto2,
  };
}

//const pessoa3 = juntarObjetos2(
//   {
//    nome: "Ana",
//  },
//  45,
// ); Agora ele informa o erro.

// ====> Exemplo 03: Type parameter in generic constrants

function prop<T, K>(objeto: T, chave: K) {
  return; // objeto[chave]
} // ERRO

function prop2<T, K extends keyof T>(objeto: T, chave: K) {
  return objeto[chave];
} // Erro concertado com generics

const pessoa4 = prop2({ nome: "Guilherme" }, "nome"); // Se fosse 'idade', ia sangrar e o Type ia avisar.

console.log(pessoa4);
