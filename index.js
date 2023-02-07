import chalk from "chalk";
import readlineSync from "readline-sync";



const propriedade = [];

var valor = 1;
console.log(chalk.magenta("Para encerrar o programa, digite 'sair'"));

while(valor !=0){
    let inserir = readlineSync.question(chalk.blue('Digite uma Propriedade do CSS: '));
    inserir = inserir.toUpperCase()

    if (inserir == "SAIR"){
        valor = 0
    } else (propriedade.push(inserir))
}

propriedade.sort()
console.log(propriedade.join('\n'));