export {};

// Quando usar:
// Quando agente não tem o controle dos tipos.
// Quando estamos processando dados do usuário com tipos não confiaveis.
// Dados que mudam com o passar do tempo.

// ====> Exemplo 01: Type Casting: as

const nome: unknown = "Guilherme";
console.log((nome as string).toUpperCase());

// ====> Exemplo 02: Type Casting: <>

const carro = "Corolla";

const tamanhoString: number = (<string>carro).length;

console.log(tamanhoString);
