const entrada = require('prompt-sync')({sigint: true}); // biblioteca do prompt

var A, B, C = Number;

A = entrada("Informe o número A");

B = entrada("Informe o número B");

C = entrada("Informe o número C");

Soma = A * A + B * B + C * C;

console.log(Soma);