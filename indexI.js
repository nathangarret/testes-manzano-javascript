const entrada = require('prompt-sync')({sigint: true}); // biblioteca do prompt

var A, B = Number;

A = entrada("Informe o valor inteiro de A: ");

B = entrada("Informe o valor intiro de B: ");

_diferenca = A - B;

quadradoDiferenca = _diferenca * _diferenca;

console.log("O quadrado da diferença entre "+ A + " e " + B + " é: " + quadradoDiferenca);