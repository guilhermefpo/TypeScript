/* Tipos */

function adicionarNumeros(num1: number, num2: number) {
  return num1 + num2;
}

// ===> Variáveis ' '
let nome: string = "Guilherme Fernando";
console.log(nome);

// ===> Arreys []
let animais: string[] = ["Elefante", "Cachorro", "Gato", "Panda", "Girafa"];
console.log(animais);

// ===> Objeto
let carro: {
  nome: string;
  ano: number;
  preco: number;
};
carro = { nome: "Toyota Yaris Sedan XS", ano: 2019, preco: 80000 };
console.log(carro);

// ===> Função
function multiplicarNumeros(n1: number, n2: number) {
  return n1 * n2;
}

console.log(multiplicarNumeros(2, 5));

// Boolean = Object
// boolean = Primitivo
