// Exercício 1: Viagem para Disney
SaldoNaConta = 15000

if (SaldoNaConta >= 15000) {
    console.log ("Exercício 1: Partiu Disney")
} else if (SaldoNaConta >= 5000) {
    console.log ("Exercício 1: Bora pra Minas Gerais")
} else (console.log ("Exercício 1: Sem férias esse ano"))

// Exercício 2: Nota do Semestre

NotaFinal = 8

if (NotaFinal >= 7) {
    console.log ("Exercício 2: Aprovado")
} else (console.log ("Exercício 2: Reprovado"))

//Exercício 3: Decisão de Compra

DinheiroNaConta = 10000

if (DinheiroNaConta >= 10000) {
    console.log("Exercício 3: Carlos comprará um novo computador") 
} else if (DinheiroNaConta >= 3000) {
    console.log("Exercício 3: Carlos comprará um smartphone")
} else (console.log("Exercício 3: Carlos irá economizar"))

//Exercício 4: Medalhas

TempoCompetição = 0.9

if (TempoCompetição < 1) {
    console.log("Exercício 4: Ana ganhou medalha de Ouro")
} else if (TempoCompetição < 2) {
    console.log("Exercício 4: Ana ganhou melalha de Prata")
} else (console.log("Exercício 4: Ana ganhou medalha de bronze"))

//Exercicio 5: Dia da semana

Dia = 1

switch (Dia) {
    case 1:
        console.log("Exercício 5: Domingo");
    break;

    case 2:
        console.log("Exercício 5: Segunda");
        break;

    case 3:
        console.log("Exercício 5: Terça");
        break;
       
    case 4:
        console.log("Exercício 5: Quarta");
        break;
    
    case 5:
        console.log("Exercício 5: Quinta");
        break;
    
        case 6:
            console.log("Exercício 5: Sexta");
            break;

    case 7:
        console.log("Exercício 5: Sabado");
    break;
    default:
            console.log("Exercício 5: Digite novamente")
}

// Exercício 6: Classificação da Nota

Nota = 'A'

switch (Nota) {
    case 'A':
        console.log("Exercício 6: Excelente");
        break;
    
    case 'B':
        console.log("Exercício 6: Bom");
        break;
    case 'C':
        console.log("Exercício 6: Regular");
        break;
    case 'D':
        console.log("Exercício 6: Ruim");
        break;
    case 'E':
        console.log("Exercício 6: Insuficiente");
        break;
        default:
            console.log("Exercício 6: Nota Invalida")
}

//Exercício 7: Estações do ano

Estação = 1

switch (Estação) {
    case 1:
        console.log("Exercício 7: Primavera");
    break;

    case 2:
        console.log("Exercício 7: Verão");
    break;

    case 3:
        console.log("Exercício 7: Outono");
    break;

    case 4:
        console.log("Exercício 7: Inverno");
    break;
    default:
        console.log("Exercício 7: Número Invalido")
}

//Exercício 8: Classificação por desconto

Classificação = "Platina"

switch (Classificação) {
    case "Bronze":
        console.log("Exercício 8: 5% de desconto");
    break;

    case "Prata":
        console.log("Exercício 8: 10% de desconto");
    break;

    case "Ouro":
        console.log("Exercício 8: 15% de desconto");
    break;

    case "Platina":
        console.log("Exercício 8: 20% de desconto");
    break;
    default:
        console.log("Exercício 8: Tipo de cliente invalido");
}