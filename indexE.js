const entrada = require('prompt-sync')({sigint: true}); // biblioteca do prompt

var Valor, TempoPrestacao, Prestacao = Number;

let Taxa = 1.15;

Valor = entrada("Digite o valor da prestação: ");

TempoPrestacao = entrada("Digite o de atraso da prestação: ");

Prestacao = Valor + (Valor * Taxa / 100) * TempoPrestacao;

console.log("A prestação agora será no valor de: " + Prestacao);