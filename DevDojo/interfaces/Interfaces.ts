interface Person {
  name: string;
  age?: number; // ? === não é obrigatório declarar.
}

interface Employee extends Person {
  salary: number;
}

let pe: Person = { name: "Guilherme" };
let emp: Employee = { name: "Guilherme", salary: 3000 };

let emp2: Employee = {
  name: "Guilherme",
  age: 25,
  salary: 3000,
};

interface Manager extends Employee {
  readonly bonus: number; // Vc cria mas não pode alterar o seu valor. Somente leitura.
}

let manager: Manager = { name: "Guilherme", salary: 3000, bonus: 5 };

manager.name = "Alterado";
