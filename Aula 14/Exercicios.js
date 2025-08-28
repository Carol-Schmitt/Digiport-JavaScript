//1 crie uma função que receba 2 números e uma operação matemática e retorna o resultado
let result = 0
 
function calculadora (num1,op,num2){
    if(op ==="+"){
       result = (num1 + num2);
    }else if(op ==="-"){
         result = (num1 - num2);
    }else if(op ==="*"){
         result = (num1 * num2);
    }else if(op ==="/"){
         result = (num1 / num2);
    }
    return result;
}
console.log(calculadora(5, "*", 6))
//2 crie uma função que recebe uma string e retorna a mesma string com todas as letras em caixa alta
function aumentaLetra(palavra){
    return palavra.toUpperCase();
}
console.log(aumentaLetra("porta"))
//3 crie uma função q recebe o ano de nascimento e ano atual e retorna idade
function calculaIdade(anoNasc, anoAtual){
    let idade = anoAtual - anoNasc;
    return idade;
}
console.log(calculaIdade(1992, 2025))
//4 função q calcula a média ritmética de um array de números e retorna o resultado
let notas = [9,7,6,10]
function calculaMedia(notas){
    let media = 0;
    let total = 0;
    for(let i = 0; i< notas.length ; i++){
    total += notas[i];
    }
    media = total / notas.length;
    return media;
    }
console.log(calculaMedia(notas))

//exercicio 5
 
let i = [1, 2, 3, 4]

function mediaAritmetica(array) {
    let soma = 0;

    for (let j = 0; j < array.length; j++) {
        soma += array[j];
    }
    return soma / array.length;
}

console.log(mediaAritmetica(i));