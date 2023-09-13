const entrada = require('prompt-sync')({sigint: true}); // biblioteca do prompt

// Solicitar a quantidade de votos válidos para cada candidato
let votosCandidatoA = parseInt(entrada("Digite a quantidade de votos válidos para o candidato A:"));
let votosCandidatoB = parseInt(entrada("Digite a quantidade de votos válidos para o candidato B:"));
let votosCandidatoC = parseInt(entrada("Digite a quantidade de votos válidos para o candidato C:"));

// Solicitar a quantidade de votos nulos e em branco
let votosNulos = parseInt(entrada("Digite a quantidade de votos nulos:"));
let votosEmBranco = parseInt(entrada("Digite a quantidade de votos em branco:"));

// Calcular o número total de eleitores
let totalEleitores = votosCandidatoA + votosCandidatoB + votosCandidatoC + votosNulos + votosEmBranco;

// Calcular os percentuais
let percentualVotosValidos = ((votosCandidatoA + votosCandidatoB + votosCandidatoC) / totalEleitores) * 100;
let percentualVotosA = (votosCandidatoA / totalEleitores) * 100;
let percentualVotosB = (votosCandidatoB / totalEleitores) * 100;
let percentualVotosC = (votosCandidatoC / totalEleitores) * 100;
let percentualVotosNulos = (votosNulos / totalEleitores) * 100;
let percentualVotosEmBranco = (votosEmBranco / totalEleitores) * 100;

// Exibir os resultados
console.log("Número total de eleitores: " + totalEleitores);
console.log("Percentual de votos válidos em relação à quantidade de eleitores: " + percentualVotosValidos.toFixed(2) + "%");
console.log("Percentual de votos válidos do candidato A em relação à quantidade de eleitores: " + percentualVotosA.toFixed(2) + "%");
console.log("Percentual de votos válidos do candidato B em relação à quantidade de eleitores: " + percentualVotosB.toFixed(2) + "%");
console.log("Percentual de votos válidos do candidato C em relação à quantidade de eleitores: " + percentualVotosC.toFixed(2) + "%");
console.log("Percentual de votos nulos em relação à quantidade de eleitores: " + percentualVotosNulos.toFixed(2) + "%");
console.log("Percentual de votos em branco em relação à quantidade de eleitores: " + percentualVotosEmBranco.toFixed(2) + "%");