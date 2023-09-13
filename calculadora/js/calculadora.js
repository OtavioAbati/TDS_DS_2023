function insert(operacao)
 {
    var resultado = document.getElementById('resultado');
    var valor1 = document.getElementById('valor1').value;
    var valor2 = document.getElementById('valor2').value;
    valor1 = Number(valor1);
    valor2 = Number(valor2);
    
    var resultadoCalculo;

    if (operacao == '+') {
        resultadoCalculo = valor1 + valor2;
    }
    if (operacao == '-') {
        resultadoCalculo = valor1 - valor2;
    }
    if (operacao == '*') {
        resultadoCalculo = valor1 * valor2;
    }
    if (operacao == '/') {
        resultadoCalculo = valor1 / valor2;
    }

    resultado.innerHTML = resultadoCalculo;

}


