import { EmailValidator, ZipCodeValidator } from "./validators";

let email: string = "gfernandoportelaoliveira@gmail.com";
let email2: string = "alysa";
let validator = new EmailValidator();
let result = validator.isValid(email);
let result2 = validator.isValid(email2);

console.log(`O e-mail: ${email} é valido? ${result}`);
console.log(`O e-mail: ${email2} é valido? ${result2}`);

let validator2 = new ZipCodeValidator();
let result3 = validator2.isValid("12345");

console.log(`O CEP é valido?: ${result3}`);
