const entrada = require('prompt-sync')({sigint: true}); // biblioteca do prompt

let valorReal, valorDolar, conversaoDolar = Number;

valorReal = entrada("Informe um valor da cotação do dólar(U$): ");

valorDolar = entrada("Informe um valor em dólar(U$): ");  

conversaoDolar = valorDolar * valorReal;

console.log("Valor depois conversão pra BRL: ", conversaoDolar);