const entrada = require('prompt-sync')({sigint: true}); // biblioteca do prompt


var A, B, C, D = Number;

A = entrada("Escreva o valor de A: ");

B = entrada("Escreva o valor de B: ");

C = entrada("Escreva o valor de C: ");

D = entrada("Escreva o valor de D: ");

resultadoSoma = A + B;
console.log(" A + B: ", resultadoSoma);

resultadoMultiplicacao = A * B;
console.log(" A * B: ", resultadoMultiplicacao);

resultadoSoma = A + C;
console.log(" A + C: ", resultadoSoma);

resultadoMultiplicacao = A * C;
console.log(" A * C: ", resultadoMultiplicacao);

resultadoSoma = A + D;
console.log(" A + D: ", resultadoSoma);

resultadoMultiplicacao = A * D;
console.log("A * D: ", resultadoMultiplicacao);

resultadoSoma = B + C;
console.log(" B + C: ", resultadoSoma);

resultadoMultiplicacao = B * C;
console.log(" B * C: ", resultadoMultiplicacao);

resultadoSoma = B + D;
console.log(" B + D: ", resultadoSoma);

resultadoMultiplicacao = B * D;
console.log(" B * D: ", resultadoMultiplicacao);

resultadoSoma = C + D;
console.log(" C + D: ", resultadoSoma);

resultadoMultiplicacao = C * D;
console.log("C * D: ", resultadoMultiplicacao);