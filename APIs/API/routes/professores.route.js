const express = require('express');
const routes = new express.Router();


routes.get("/", (request, response)=>{
    response.send("Professores");
})

routes.get("/notas", (request, response)=>{
    response.send("Notas");
})

routes.get("/atividade", (request, response)=>{
    response.send("Atividade");
})

routes.get("/material", (request, response)=>{
    response.send("Material");
})

module.exports = routes;