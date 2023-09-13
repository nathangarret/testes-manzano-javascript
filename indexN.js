const entrada = require('prompt-sync')({sigint: true}); // biblioteca do prompt

const A = parseFloat(entrada("Digite o valor de A: "));
const B = parseFloat(entrada("Digite o valor de B: "));
const C = parseFloat(entrada("Digite o valor de C: "));
const D = parseFloat(entrada("Digite o valor de D: "));

const P1 = A * C;
const P2 = A * C;
const S = B + D;

console.log("O resultado do produto de A com C é: ", P1);
console.log("O resultado do produto de A com C é: ", P2);
console.log("O resultado da soma de B com D é: ", S);