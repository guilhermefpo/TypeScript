export {};

// ====> Exemplo: Intersection Types
// Conbina duas ou mais interfaces em um tipo,
// Ordem importa.

interface DadosBancarios {
  conta: number;
  agencia: number;
  banco: string;
}

interface Cliente {
  nome: string;
  email: string;
}

interface DadosPessoaFisica {
  cpf: number;
}

type DadosCliente = DadosBancarios & Cliente & DadosPessoaFisica;

const dadosCliente: DadosCliente = {
  conta: 12345,
  agencia: 123,
  banco: "Banco do Brasil",
  nome: "Guilherme",
  email: "guilherme@gmail.com",
  cpf: 1234567890,
};

console.log(dadosCliente);
