const prompt = require("prompt-sync")();
let correctPassword = 1234
let senha = 0
while(senha !== correctPassword){
     senha = parseInt(prompt(`Digite a senha: `))
       if(senha !== correctPassword){
        console.log (`Senha incorreta! ${senha}`)
       }
}
console.log(`Senha correta`)