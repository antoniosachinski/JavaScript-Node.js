// CRIANDO UMA CALCULADORA DIVIDIDA EM MÓDULOS QUE RECEBE VALORES DO CONSOLE 

// "chamando" os módulos
var so = require("./so");
var su = require("./su");
var di = require("./di");
var mu = require("./mu");

// criando uma interface responsiva no console
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// RECEBENDO VALORES DO CONSOLE

// criando uma função para receber o primeiro número
rl.question("Digite um número? ", (n1) => {
  n = Number(n1);
  
  // criando uma função para receber o segundo número
  rl.question("Digite um outro número? ", (n2) => {
    nn = Number(n2);

    // criando uma função para escolher a operação
    console.log("1 - soma");
    console.log("2 - subtração");
    console.log("3 - divisão");
    console.log("4 - multiplicação");
    rl.question("Qual operação você deseja efetuar? ", (op) => {
      o = Number(op);

      // calculando os possíveis resultados
      switch (o) {
        case 1:
          // atribuindo os parametro tratados pela função/ módulo a uma variavel
          res = so(n, nn);
          break;
        case 2:
          res = su(n, nn);
          break;
        case 3:
          res = (di(n, nn)).toFixed(2);
          break;
        case 4:
          res = mu(n, nn);
          break;
      }
      console.log(`O resultado da operação é ${res}`);
    });
  });
});
