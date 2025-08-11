for (let i = 1; i <= 10; i++) {
    if (i %2 === 0) {
        console.log(`O número ${i} é par`)
    } else {
        console.log("O número " + i + " é ímpar") }
}

prompt = require("prompt-sync") ();

for (let dia = 1; dia <= 10; dia++) {
    let quant = prompt("Quantas maçãs o João colheu no dia ${dia}?");
}