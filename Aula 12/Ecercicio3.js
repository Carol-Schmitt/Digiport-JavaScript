//Calcular a soma e a media dos elementos de um array

listaNro = [45, 36, 97, 12, 45];

soma = 0;
media = 0;
for (i = 0; i < listaNro.length; i++) {

soma = soma + listaNro[i];
media = soma / listaNro[i];

console.log(`Soma: ${soma} + Média: ${media}`)
}