//Exercicio 2 - Crie um array chamado listaDeTaregas. Ele sera usado para guardar as tarefas que o usuario adicionar; 
// Crie uma funçào chamada adicionarTarega(). Pense: quais parametros essa função precisa para funcionar? O que deve acontecer dentro do corpo da funáão para que a nova tarea seja incluida?

Tarefa1 = 1;
Tarefa2 = 2;
Tarefa3 = 3;
Tarefa4 = "novaTarefa";

listaDeTarefas = [Tarefa1, Tarefa2, Tarefa3];

function adicionarTarefa (item) {

    listaDeTarefas.push(item);
}

adicionarTarefa("nova tarefa");

console.log(listaDeTarefas)

//Exercicio3: remover a mesma tarefa

function removerTarefa (item) {
    listaDeTarefas.splice(3, 1)
}
removerTarefa();

console.log(listaDeTarefas)