"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Empresa_1 = require("./Empresa");
const Endereco_1 = require("./Endereco");
const Telefone_1 = require("./Telefone");
let endereco = new Endereco_1.default("123", "Rua das Flores", "Centro", "São Paulo");
let telefone = new Telefone_1.default("11", "99999-9999");
let telefone2 = new Telefone_1.default("11", "99999-9999");
let empresa = new Empresa_1.default("Empresa 1", "Empresa 1", "1234567890", endereco, [
    telefone,
    telefone2,
]);
console.log(empresa);
