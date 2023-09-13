const entrada = require('prompt-sync')({sigint: true}); // biblioteca do prompt

function trocarValores(a, b) {
    const temp = a;
    a = b;
    b = temp;
    return [a, b];
}

  
let a, b = Number

a = entrada("Informe o valor de A: ");

b = entrada("Informe o valor de B: ");

console.log("Valores originais: " + a + " e " + b);

const [novoA, novoB] = trocarValores(a, b);

console.log(` Valores trocados: A = ${novoA} e B = ${novoB}`);
