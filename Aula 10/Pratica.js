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

