const { listaUsuarios, buscaUsuarioPorID, inserir, atualizar, deletar, loginUsuario } = require('../repository/usuario.repository')

module.exports = {
    buscarUsuario: (req, res)=>{

        listaUsuarios().then((data)=>{
            res.send(data);
        }).catch((error)=>{
            res.status(404).send({message: "Erro ao consultar usuarios!"});
        })
    },

    buscaUserID: (req, res)=>{
        const {id} = req.params;

        buscaUsuarioPorID(id).then((data)=>{
            res.send(data);
        }).catch((error)=>{
            console.log(error);
            res.status(500).send({message: "Erro ao consultar por ID!"});
        })
     },

     insert: (req, res)=>{
        const data = {nome, user_name, email} = req.body;

        inserir(data).then((data)=>{
            res.status(200).send({message: "Usuario inserido com sucesso!", data})
        }).catch((error)=>{
            console.log(error);
            res.status(500).send({message: "Erro ao inserir usuario!"})
        })
     },

     update: (req, res)=>{
        const {id} = req.params;
        const data = req.body;

        if (data.id){
            res.status(400).send({message: "Não é possível enviar o parâmetro ID!"});
        }   

        atualizar(id, data).then((data)=>{
            res.status(200).send({message: "Sucesso ao atualizar!"})
        }).catch((error)=>{
            console.log(error);
            res.status(500).send({message: "Erro ao atulizar"})
        })
     },

     del: (req, res)=>{
        const {id} = req.params;

        deletar(id).then((data)=>{
            res.status(200).send({message: "Sucesso ao deletar usuário!"})
        }).catch((error)=>{
            console.log(error)
            res.status(500).send({message: "Erro ao deletar usuário!"})
        })
     },

     login: async (req, res)=>{
        const {user_name, senha} = req.body

        const user = await loginUsuario();

        if(senha == usuario.senha){
            if(user_name == usuario.user_name){
                res.send({message: "Login realizado com sucesso!"})
            }
        }else{
            res.send({message: "Erro ao realizar login!"});
        };
     },

     esqueceuSenha: async (req, res)=>{
        const {email} = req.body;

        const user = await conn.select().from("usuario").where({email:email});

        const chave = Math.floor(Math.random() * 100);

        await conn.insert(user.id, chave).into("rec_senha");
        
        res.send({chave});
     }
}