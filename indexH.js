const entrada = require('prompt-sync')({sigint: true}); // biblioteca do prompt

var Volume, Comprimento, Largura, Altura = parseFloat;

Comprimento = entrada("Informe o comprimento da caixa: ");

Largura = entrada("Informe a largura da caixa: ");

Altura = entrada("Informe a altura da caixa: ");

Volume = Comprimento * Altura * Largura;

console.log("O volume da caixa é de: ", Volume, " Unidades Cúbicas");