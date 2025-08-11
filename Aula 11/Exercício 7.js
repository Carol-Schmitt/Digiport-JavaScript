prompt = require("prompt-sync") ();

SaldoInicial = 1000;
opcao = 0;

while (opcao !== 4) {
    console.log("1 - Verificar saldo");
    console.log("2 - Depositar");
    console.log("3 - Sacar");
    console.log("4 - Sair");

opcao = parseInt(prompt("Escolha uma opção: "));

switch (opcao) {
    case 1:
        console.log(`Seu saldo atual é de ${SaldoInicial}`);
        break;
    
    case 2:
        console.log(`O Valor será depositado`)
        break;

    case 3:
        console.log("O valor será debitado");
        break;
    
    case 4:
        console.log("Obrigada pela visita ao nosso site");
        break;
    default:
        console.log("Opção invalida. Tente novamente");
}

}