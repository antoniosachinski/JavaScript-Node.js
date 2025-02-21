// CRIANDO UMA CALCULADORA DIVIDIDA EM MÓDULOS QUE RECEBE VALORES DO CONSOLE 

// "chamando" os módulos
var soma = require("./so");
var subitracao = require("./su");
var divisao = require("./di");
var multiplicacao = require("./mu");

// criando uma interface responsiva no console
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// RECEBENDO VALORES DO CONSOLE

// criando uma função para receber o primeiro número
rl.question("Digite um número? ", (valor1) => {
  numero1 = Number(valor1);
  
  // criando uma função para receber o segundo número
  rl.question("Digite um outro número? ", (valor2) => {
    numero2 = Number(valor2);

    // criando uma função para escolher a operação
    console.log("1 - soma");
    console.log("2 - subtração");
    console.log("3 - divisão");
    console.log("4 - multiplicação");
    rl.question("Qual operação você deseja efetuar? ", (operacaoSelecionada) => {
      operacao = Number(operacaoSelecionada);

      // calculando os possíveis resultados
      switch (operacao) {
        case 1:
          // atribuindo os parametro tratados pela função/ módulo a uma variavel
          resultado = soma(numero1, numero2);
          break;
        case 2:
          resultado = subitracao(numero1, numero2);
          break;
        case 3:
          resultado = (divisao(numero1, numero2)).toFixed(2);
          break;
        case 4:
          resultado = multiplicacao(numero1, numero2);
          break;
      }
      console.log(`O resultado da operação é ${resultado}`);
    });
  });
});
