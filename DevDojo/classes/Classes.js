"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name) {
        this.name = name;
    }
    print() {
        console.log(`Name: ${this.name}`);
    }
}
class Employee extends Person {
    constructor(name, salary) {
        super(name);
        this._salary = salary;
    }
    print() {
        console.log(`Name: ${this.name}, Salary: ${this._salary}`);
    }
    get salary() {
        return this._salary;
    }
    set salary(value) {
        this._salary = value;
    }
}
let p1 = new Person("Alyse");
let emp1 = new Employee("Jane", 3000);
p1.print(); // Name: Alyse
emp1.print(); // Name: Jane, Salary: 3000
let p3 = new Employee("Lucy", 4000);
p3.print(); // Name: Lucy, Salary: 4000
