class Person {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  print(): void {
    console.log(`Name: ${this.name}`);
  }
}

class Employee extends Person {
  private _salary: number;

  constructor(name: string, salary: number) {
    super(name);
    this._salary = salary;
  }

  print(): void {
    console.log(`Name: ${this.name}, Salary: ${this._salary}`);
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    this._salary = value;
  }
}

let p1 = new Person("Alyse");
let emp1 = new Employee("Jane", 3000);

p1.print(); // Name: Alyse
emp1.print(); // Name: Jane, Salary: 3000

let p3: Person = new Employee("Lucy", 4000);
p3.print(); // Name: Lucy, Salary: 4000
