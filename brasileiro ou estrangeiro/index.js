const readline = require('readline');

// Cria uma interface para ler dados do terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Faz uma pergunta e lê a resposta do usuário
rl.question('Em qual país você nasceu? ', (nacio) => {
 nacio.toLocaleLowerCase() == 'brasil' ? console.log('Você é brasileiro!') : console.log('Voce é estrangeiro!')

  // Fecha a interface após a leitura
  rl.close();
});