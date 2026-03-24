// :number => Conjunto de números (inteiros, flutuantes, positivos, negativos, infinito, MaN, etc)

// :bigint => 2^53, target: esnext

// ===> Exemplo: number
let num1: number = 23.0;
let num2: number = 0x78cf;
let num3: number = 0o577;
let num4: number = 0b110001;

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);

// ===> Exemplo: bigint

let big1: bigint = 9895858458969n;

console.log(big1);
