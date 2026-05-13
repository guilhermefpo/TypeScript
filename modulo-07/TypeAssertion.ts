export {};

// Exemplo 01: Type Assertion (as / <>)

function exibirPrecoFinal(
  preco: number,
  desconto: number,
  formato: boolean,
): number | string {
  const precoComDesconto = preco * (1 - desconto);

  return formato ? ` R$ ${precoComDesconto}` : precoComDesconto;
}

const descontoFinal = exibirPrecoFinal(100, 0.05, true) as string;

console.log(descontoFinal);

const novoDesconto = <number>exibirPrecoFinal(200, 0.2, false);
console.log(novoDesconto);

// Exemplo 02:

type Humano = {
  nome: string;
  idade: number;
  idioma: string;
};

const humano = {
  nome: "Guilherme",
  idade: 36,
  idioma: "Português",
};

// const humano2 = humano as Humano;

// console.log(humano2.nome.length);

const humano2: Humano = humano;

console.log(humano2.nome.length);
