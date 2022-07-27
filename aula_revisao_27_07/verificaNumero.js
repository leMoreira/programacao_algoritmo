const chalk = require('chalk')


let numero = 8;

if (isNaN(numero)){
    console.log("Não é um número")
} else {
    console.log(`Você digitou o número ${numero}`)
}

if(numero === '8'){
    console.log(`Número igual a ${numero}`);
} else {
    console.log(chalk.bgBlueBright("Digite corretamente se é um número ou texto"));
}