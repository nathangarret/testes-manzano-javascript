const entrada = require('prompt-sync')({sigint: true}); // biblioteca do prompt

const A = parseFloat(entrada("Informe o número A"));
const B = parseFloat(entrada("Informe o número B"));
const C = parseFloat(entrada("Informe o número C"));

const soma = A + B + C;

quadradoSoma = soma * soma;

console.log(quadradoSoma);