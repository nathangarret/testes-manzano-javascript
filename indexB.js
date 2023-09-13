const entrada = require('prompt-sync')({sigint: true}); // biblioteca do prompt

var grausFahrenheit = parseFloat(entrada("Temperatura em graus Fahrenheit: "));

var resultadoConversao = (grausFahrenheit - 32) * (5/9);

console.log("Temperatura em graus Fahrenheit é = ", grausFahrenheit);
console.log("Temperatura em graus Celsius é = ", resultadoConversao);
