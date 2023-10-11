const { buscaProfessor, buscaProfessorId, insertProfessor, updateProfessor, deleteProfessor } = require("../repository/professores.repository")

module.exports = {
    listaProfessores: (req, res)=>{

        buscaProfessor().then((data)=>{
            res.send(data);
        }).catch((error)=>{
            res.status(404).send({message: "Erro ao consultar os professores"})
        })
    },

    buscaProfessorPorId: (req, res)=>{
        const {id} = req.params;


        buscaProfessorId(id).then((data)=>{
            res.send(data);
        }).catch((error)=>{
            console.log(error)
            res.status(404).send({message: "Erro ao consultar professor por ID"})
        })
    },

    inserir: (req, res)=>{
        const data = {nome, materia} = req.body;

        insertProfessor(data).then((data)=>{
            res.status(200).send({message: "Professor inserido com sucesso!", data})
        }).catch((error)=>{
            console.log(error)
            res.status(500).send({message: "Erro ao inserir professor!"})
        })
    },

    update: (req, res)=>{
        const {id} = req.params;
        const data = req.body;

        if (data.id){
            res.status(400).send({message: "Não é permitido enviar o parâmetro ID"})
        }
         
        updateProfessor(id, data).then((data)=>{
            res.status(200).send({message: "Professor atualizado com sucesso!"})
        }).catch((error)=>{
            console.log(error)
            res.status(500).send({message: "Erro ao atualizar o professor!"})
        })
        
    },

    deleteProf: (req, res)=>{
        const {id} = req.params;

        deleteProfessor(id).then((data)=>{
            res.status(200).send({message: "Professor deletado com sucesso!"})
        }).catch((error)=>{
            console.log(error)
            res.status(500).send({message: "Erro ao deletar profesosr!"})
        })
    }
}