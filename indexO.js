/* Ler o valor correspondente ao salário mensal (variável SM) de um trabalhador e também o valor do 
percentual de reajuste (variável PR) a ser atribuído. Apresentar o valor do novo salário (variável NS). */ 

const SM = parseFloat(prompt("Digite o sálario mensal: "));

const PR = parseFloat(prompt("Digite o percentual de reajuste: "));

const NS = SM + (SM * PR / 100);

document.write("Após o reajuste o salário será no valor de: ", NS);