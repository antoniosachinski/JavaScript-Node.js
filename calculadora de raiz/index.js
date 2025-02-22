// CRIANDO UMA CALCULADORA DE RAIZ QUADRADA

// criando uma interface responsiva no console
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// RECEBENDO VALORES DO CONSOLE

// chamando a função raiz
var resultado = require('./equ');

// criando uma função para receber o primeiro número
rl.question('Digite um número para calcular a raiz? ', (input) => {
  numero = Number(input);
    var resultadoFinal = resultado(numero);
   
  // Converte o número para string e extrai a parte decimal
  let parteDecimal = resultadoFinal.toString().split('.')[1] || '';

  // Verifica se as 4 primeiras casas decimais são zero
  if (parteDecimal.slice(0, 4) === '0000') {
    // Se as 4 primeiras casas forem zero, arredonda para inteiro
    console.log(Math.floor(re)); // Math.floor arredonda para baixo, removendo as casas decimais
  } else {
    // Caso contrário, mostra com até 10 casas decimais
    console.log(re.toFixed(10)); // exibe com até 10 casas decimais
  }
});
