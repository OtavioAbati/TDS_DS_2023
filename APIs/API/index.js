const express = require('express');
const bodyParser = require('body-parser')
const app = new express();

app.use(bodyParser.json());

app.get("/alunos", (request, response)=>{
    response.send("Alunos");
});

app.get("/professores", (request, response)=>{
    response.send("Professores");
});

app.get("/soma", (request, response)=>{
    var valor1 = 10;
    var valor2 = 50;

    var resultado = valor1 + valor2;

    response.send(`O resultado da soma é: ${resultado}`);
});

app.post("/soma_parametros", (request, response)=>{
    const valor1 = request.body.valor1;
    const valor2 = request.body.valor2;

    console.log(valor1, valor2);

    const resultado = valor1 + valor2;

    response.send(`O resultado da soma dos parâmetros é igual a: ${resultado} mil reais`);
})


app.listen(8080, (error)=>{
   
        console.log("O servidor está rodando na porta 8080!  👍");
});

