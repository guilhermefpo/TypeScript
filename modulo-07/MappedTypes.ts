// Obter um modelo existente
// Transformar cada um deles em um novo tipo
// Permanecer sincronizado com outro tipo

export {};

// Exemplo 01: Mapped Types

type Usuario = {
  nome: string;
  endereco: string;
  telefone: string;
  idade: number;
  apelido: string;
};

type FuncionarioOpicional = {
  nome?: string;
  endereco?: string;
  telefone?: string;
  idade?: number;
  apelido?: string;
};

type UsuarioSomenteLeitura = {
  readonly nome: string;
  readonly endereco: string;
  readonly telefone: string;
  readonly idade: number;
  readonly apelido: string;
};

// {[P in K]: T}

type UsuarioMappedType = {
  [P in keyof Usuario]?: Usuario[P]; // for in
};

const usuarioMapped: UsuarioMappedType = {
  nome: "Glaucia Lemos",
};

console.log(usuarioMapped);

// ====>  Exemplo 02: Outros Tipos Avançados

interface Livro {
  titulo: string;
  autor: string | null;
  preco: number;
  numeroPaginas: number;
}

type Artigo = Omit<Livro, "numeroPaginas">;

type LivroModelo = Readonly<Livro>;

const livro: LivroModelo = {
  autor: "Boris Cherny",
  numeroPaginas: 324,
  preco: 19.99,
  titulo: "Programing TypeScript",
};

/// livro.autor = "Glaucia"

// .Utility Types

// Partial: Torna tudo opicional

type UsuarioParcial = Partial<Usuario>;

// required: Torna tudo obrigatório

type UsuarioObrigatorio = Required<Usuario>;

// Pick: Seleciona propriedades específicas

type UsuarioResumo = Pick<Usuario, "nome" | "idade">;

// Record: Cria objetos com chaves padronizadas

type Cargos = "admin" | "user" | "guest";

type Permissoes = Record<Cargos, boolean>;

// Exclude: Remove tipos de uma união

type Status = "ativo" | "inativo" | "pendente";

type NovoStatus = Exclude<Status, "pendente">;

// Extract: Mantêm tipos compativeis

type Tipos = string | number | boolean;

type ApenasString = Extract<Tipos, string>;

// NonNullable: Remove null e underfined

type Nome = string | null | undefined;

type NomeValido = NonNullable<Nome>;

// ReturnType: Obtém o tipo de retorno de uma função

function obterUsuario() {
  return {
    nome: "Glaucia",
    idade: 30,
  };
}

type Retorno = ReturnType<typeof obterUsuario>;

// Parameters: Obtém os parâmetros de uma função

function criarUsuario(nome: string, idade: number) {}

type Params = Parameters<typeof criarUsuario>;

// ConstructorParameters: Extrai parâmetros de construtores

class Pessoa {
  constructor(nome: string, idade: number) {}
}

type PessoaParams = ConstructorParameters<typeof Pessoa>;
