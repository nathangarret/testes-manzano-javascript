const entrada = require('prompt-sync')({sigint: true}); // biblioteca do prompt

var Area, Raio, Altura, Volume = parseFloat;

Raio = entrada("Digite o valor do raio: ");

Altura = entrada("Digite o altura do raio: ");

Volume = 3.141596 * (Raio ^ 2) * Altura;

console.log("Volume da lata de oléo total é de: ", Volume);
