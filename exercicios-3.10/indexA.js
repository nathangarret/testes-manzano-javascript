const entrada = require('prompt-sync')({sigint: true}); // biblioteca do prompt

var valorA = parseInt(entrada("Informe o primeiro valor: "));
var valorB = parseInt(entrada("Informe o segundo valor: "));
var valorC = parseInt(entrada("Informe o terceiro valor: "));
var valorD = parseInt(entrada("Informe o quarto valor: "));

var P = valorA * valorC;
var S = valorB + valorD;

console.log(`O resultado do produto de A(${valorA}) * C(${valorC}) = ${P}`);
console.log(`O resultado da soma de B(${valorB}) + D(${valorD}) = ${S}`);