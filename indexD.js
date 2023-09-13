const entrada = require('prompt-sync')({sigint: true}); // biblioteca do prompt

var tempoCorrida, velocidade, distancia, litrosUsados = parseFloat;

tempoCorrida = entrada("Qual o tempo de gasto de viagem?");

velocidade = entrada("Qual foi a velocidade média dessa viagem?");

distancia = tempoCorrida * velocidade;

litrosUsados = distancia / 12;

console.log("Velocidade Média: ", velocidade, " Km/h");
console.log("Tempo Gasto de viagem: ", tempoCorrida, " horas");
console.log("Distância percorrida: ", distancia, " Km");
console.log("Quantidade de litros de combustível utilizada: ", litrosUsados, " litros");
