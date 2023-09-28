module.exports={
    soma:(request, response)=>{
        var valor1 = 10;
        var valor2 = 50;
    
        var resultado = valor1 + valor2;
    
        response.send(`O resultado da soma é: ${resultado}`);
    },

    somaParametro:(request, response)=>{
        const valor1 = request.body.valor1;
        const valor2 = request.body.valor2;
        
        console.log(valor1, valor2);
        
        const resultado = valor1 + valor2;
        
        response.send(`O resultado da soma dos parâmetros é igual a: ${resultado}`);
        
    }
}