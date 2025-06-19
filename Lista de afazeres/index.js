var {
  adicionarTarefa,
  marcarFeito,
  marcarDesfeito,
  verTarefas,
} = require('./gestaoTarefas');
const { tarefasPendentes, tarefasConcluidas } = require('./tarefas');

adicionarTarefa('b');
verTarefas();
