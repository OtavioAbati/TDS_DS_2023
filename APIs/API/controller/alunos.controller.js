const { buscaTodos, buscaAlunoPorId, inserir, atualizar, deletar } = require("../repository/alunos.repository")


module.exports = {
    listaAlunos: (req, res)=>{

        buscaTodos().then((data)=>{
            res.send(data);
        }).catch((error)=>{
            res.status(404).send({message: "Erro ao consultar os alunos!"})
        }) 
    },

    buscaAlunorPorId: (req, res)=>{
        const {id} = req.params;

        buscaAlunoPorId(id).then((data)=>{
            res.send(data);
        }).catch((error)=>{
            res.status(500).send({message: "Erro ao consultar o aluno por ID!"})
        })
        
    },

    inserir: (req, res)=>{
        const data = {nome, idade, email} = req.body;

        inserir(data).then((data)=>{
            res.status(200).send({message: "Aluno inserido com sucesso!", data})
        }).catch((error)=>{
            console.log(error)
            res.status(500).send({message: "Erro ao inseir um novo aluno!"})
        })
    },

    atualizar: (req, res)=>{

        const {id} = req.params;
        const data = req.body;        

        if (data.id) {
            res.status(400).send({message: "Não é permitido enviar o parâmetro ID"})
        }

        atualizar(id, data).then((data)=>{    
            res.status(200).send({message: "Aluno atualizado com sucesso"})
        }).catch((error)=>{
            res.status(500).send({message: "Erro ao atualizar o aluno!"})
        })
    },

    deletar: (req, res)=>{
        const {id} = req.params;

        deletar(id).then((data)=>{
            res.status(200).send({message: "Aluno deletado com sucesso!"})
        }).catch((error)=>{
            console.log(error)
            res.status(500).send({message: "Erro ao deletar o aluno!"})
        })
    }
}