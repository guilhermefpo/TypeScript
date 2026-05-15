import { Validator } from "./validator";
// Ou:
// import { Validator as FormValidator } from './validator';

export class EmailValidator implements Validator {
  isValid(s: string): boolean {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(s);
  }
}
