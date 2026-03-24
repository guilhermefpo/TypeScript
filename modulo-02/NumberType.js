"use strict";
// :number => Conjunto de números (inteiros, flutuantes, positivos, negativos, infinito, MaN, etc)
Object.defineProperty(exports, "__esModule", { value: true });
// :bigint => 2^53, target: esnext
// ===> Exemplo: number
let num1 = 23.0;
let num2 = 0x78cf;
let num3 = 0o577;
let num4 = 0b110001;
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
// ===> Exemplo: bigint
let big1 = 9895858458969n;
console.log(big1);
