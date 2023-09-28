const usuario = {
    id : 1,
    nome: "Otávio",
    user_name: "tavinho",
    senha: 123
}

module.exports={
    buscarUsuario:(request, response)=>{
        response.send(usuario);
    },

    login:(request, response)=>{
        const user_name = request.body.user_name;
        const senha = request.body.senha;
    
        if (user_name == usuario.user_name && senha == usuario.senha) {
                response.send("Login bem sucedido");
            }
            else{
                response.send("Senha ou usuário inválidos!");
            }
    }       
    
}