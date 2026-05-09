"use strict";
// Tipos Primitivos:
Object.defineProperty(exports, "__esModule", { value: true });
let texto = "string";
let numero = 10;
let booleano = true;
// Indefinido de tipo:
// TypeScript possui um tipo especial, "any", que é usado para não atribuir um tipo especifico.
let comprimento = (mensagem) => {
    console.log(`Bem Vindo ${mensagem}`);
};
// Retorno de uma função definido:
let comprimento_1 = (mensagem) => {
    return `Bem Vindo ${mensagem}`;
};
// União de tipos:
let mensagem = (mensagem) => {
    return `Bem Vindo ${mensagem}`;
};
let msgTelefone = (informacao) => {
    return `Add: ${informacao.ddd}, numero: ${informacao.numero}`;
};
// Verificando Tipos:
let msg = (mensagem) => {
    if (typeof mensagem === "string") {
        return `Bem Vindo ${mensagem.toUpperCase()}`;
    }
    else {
        return `Bem Vindo ${mensagem}`;
    }
};
