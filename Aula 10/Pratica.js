listaAlunas = ["Ana", "Melissa", "Patricia", "Carol"]
saborSorvete = ["morango", "chocolate", "creme"]

for (let i = 0; i < listaAlunas.length && i < saborSorvete.length; i++) {
    console.log("Nome: " + listaAlunas[i] + ", seu sabor favorito é " + saborSorvete[i])
}

alunas = [
    { nome: "Ana", sorvete: "chocolate" },
    { nome: "Bruna", sorvete: "creme" },
    { nome: "Eva", sorvete: "pistache" },
];

for (aluna of alunas) {
    console.log(`Nome: ${aluna.nome} | Sabor favorito: ${aluna.sorvete}`);

}

for (let i = 0; i < 10; i++) {
    if (i %3 === 0) {
        console.log("O Dunut de número " + i + " é recheado de chocolate")
    } else {
        console.log("O Dunut de número " + i + " é recheado de baunilha") }
}

prompt = require("prompt-sync") ();

opcao = 0;

while (opcao !== 4) {
    console.log("1 - Ver o cardápio");
    console.log("2 - Fazer o pedido");
    console.log("3 - Falar com um atendente");
    console.log("4 - Sair");

opcao = parseInt(prompt("Escolha uma opção: "));

switch (opcao) {
    case 1:
        console.log("Cardapio: Hamburguer, Batata, Refrigerante");
        break;
    
    case 2:
        console.log("Pedido anotado! Estamos preparando seu lanche com carinho");
        break;

    case 3:
        console.log("A Atendente está a caminho");
        break;
    
    case 4:
        console.log("Obrigada pela visita! Volte sempre!");
        break;
    default:
        console.log("Opção invalida. Tente novamente");
}

}
