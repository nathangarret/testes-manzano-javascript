const entrada = require('prompt-sync')({sigint: true}); // biblioteca do prompt

let salarioMensal = parseFloat(entrada("Informe o salário mensal: "));

let salarioPercentual = parseFloat(entrada("Digite o valor do percentual de reajuste: "));

let novoSalario = salarioMensal + (salarioMensal  * (salarioPercentual / 100));

console.log("O novo salário será no valor de: " + novoSalario);