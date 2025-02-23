var decobrirPares = function(valor1, valor2){
    if (valor1 != valor2){
        if(valor1 < valor2){
            valorMenor = valor1;
            valorMaior = valor2;
            for (valorMenor != valorMaior; valorMenor <= valorMaior; valorMenor++){
                if (valorMenor % 2 == 0)
                    console.log(valorMenor)
            };
        }
    }else{
        console.log("Os números são iguais");
    }
}

module.exports = decobrirPares
