// Tipos Primitivos:

let texto: string = "string";
let numero: number = 10;
let booleano: boolean = true;

// Indefinido de tipo:
// TypeScript possui um tipo especial, "any", que é usado para não atribuir um tipo especifico.

let comprimento = (mensagem: any) => {
  console.log(`Bem Vindo ${mensagem}`);
};

// Retorno de uma função definido:
let comprimento_1 = (mensagem: string): string => {
  return `Bem Vindo ${mensagem}`;
};

// União de tipos:

let mensagem = (mensagem: string | number): string => {
  return `Bem Vindo ${mensagem}`;
};

// Tipos com objetos:

type Telefone = {
  ddd: string;
  numero: string;
};

let msgTelefone = (informacao: Telefone): string => {
  return `Add: ${informacao.ddd}, numero: ${informacao.numero}`;
};

// Verificando Tipos:

let msg = (mensagem: string | number): string => {
  if (typeof mensagem === "string") {
    return `Bem Vindo ${mensagem.toUpperCase()}`;
  } else {
    return `Bem Vindo ${mensagem}`;
  }
};
