export {};

// ====> Exemplo 01: Generics

function retornarElementosRandomicos<T>(itens: T[]): T {
  if (itens.length === 0) {
    throw new Error("O array não pode estar vazio.");
  }
  const itemRandomico = Math.floor(Math.random() * itens.length);
  const escolhido = itens[itemRandomico];
  if (escolhido === undefined) {
    throw new Error("Índice fora do intervalo.");
  }
  return escolhido;
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosRandomicos = retornarElementosRandomicos<number>(numeros);
console.log(console.log(numerosRandomicos));

let estados = [
  "São Paulo",
  "Rio de Janeiro",
  "Minas Gerais",
  "Parana",
  "Santa Catarina",
  "Rio Grande do Sul",
];
let estadosRandomicos = retornarElementosRandomicos<string>(estados);

console.log(retornarElementosRandomicos(numeros));
console.log(retornarElementosRandomicos(estados));

// ====> Exemplo 02: Generics

function exibirElementos<T>(arrey: T[]): void {
  arrey.forEach((elemento) => {
    console.log(elemento);
  });
}

let number: number[] = [1, 2, 3, 4, 5];

let states: string[] = ["Bahia", "Amazonas", "Ceará"];

exibirElementos<number>(number);
exibirElementos<string>(states);
