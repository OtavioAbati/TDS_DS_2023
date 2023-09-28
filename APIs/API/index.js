const express = require('express');
const bodyParser = require('body-parser');
const routes = require("./routes/");

const app = new express();

app.use(bodyParser.json());

app.use(routes);

app.listen(8080, (error)=>{
   
        console.log("O servidor está rodando na porta 8080!  👍");
});

