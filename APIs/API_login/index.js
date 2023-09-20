const express = require('express');
const bodyParser = require('body-parser');
const app = new express();

app.use(bodyParser.json());

const usuario = {
    id : 1,
    nome: "Otávio",
    user_name: "tavinho",
    senha: 123
}

app.get("/usuario", (request, response)=>{
    response.send("usuario");
})

app.post("/login", (request, response)=>{
    const user_name = request.body.user_name;
    const senha = request.body.senha;

    if (user_name == usuario.user_name && senha == usuario.senha) {
            response.send("Login bem sucedido");
        }
        else{
            response.send("Erro");
        }
})

app.listen(8080, (error)=>{
   
    console.log("O servidor está rodando na porta 8080!  👍");
});