const { tarefasPendentes, tarefasConcluidas } = require('./tarefas'); // declarando como variavei globais para serem acessadas pelas demais variaveis

var adicionarTarefa = function (novaTarefa) {
  var id = Number(1);
  var desc = 'pão com macarrão';
  return tarefasPendentes.push(novaTarefa); // adiciona o tarefas novas diretamente na lista de pendentes
};

var marcarFeito = function (tarefaFeita) {
  const index = tarefasPendentes.indexOf(tarefaFeita);
  if (index !== -1) {
    tarefasPendentes.splice(index, 1); // remove da lista de pendentes o intem
    tarefasConcluidas.push(tarefaFeita); // adiciona na lista de concluidas
  }
  return { tarefasPendentes, tarefasConcluidas };
};
var marcarDesfeito = function (tarefaDesfeita) {
  const index = tarefasConcluidas.indexOf(tarefaDesfeita);
  if (index !== -1) {
    tarefasConcluidas.splice(index, 1);
    tarefasPendentes.push(tarefaDesfeita);
  }
  return { tarefasPendentes, tarefasConcluidas };
}; // faz exatamente o contrario da função marcar como feita

var verTarefas = function () {
  tamanho1 = tarefasConcluidas.legth;
  tamanho2 = tarefasPendentes.legth;
  tarefas = tarefasConcluidas.concat(tarefasPendentes);
  return console.log(tamanho2);
};

module.exports = { adicionarTarefa, marcarFeito, marcarDesfeito, verTarefas };