const entrada = require('prompt-sync')({sigint: true}); // biblioteca do prompt

var grausCelsius = parseFloat(entrada("Temperatura em graus Celsius: "));

var resultadoConversao = (9 * grausCelsius + 160) / 5;

console.log("Temperatura em graus Fahrenheit é = ", grausCelsius);
console.log("Temperatura em graus Fahrenheit é = ", resultadoConversao);