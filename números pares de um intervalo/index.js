var decobrirPares = function (valor1, valor2) {
  if (valor1 == valor2) {
    console.log('Os números são iguais');
    return;
  }
  var valorMenor, valorMaior;
  if (valor1 < valor2) {
    valorMenor = valor1;
    valorMaior = valor2;
  } else {
    valorMaior = valor1;
    valorMenor = valor2;
  }
  for (valorMenor != valorMaior; valorMenor <= valorMaior; valorMenor++) {
    if (valorMenor % 2 == 0) console.log(valorMenor);
  }
};

decobrirPares(10, 1); 
decobrirPares(1, 10); 
decobrirPares(5, 5); 
