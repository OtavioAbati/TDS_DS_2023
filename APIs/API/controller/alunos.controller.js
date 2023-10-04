const { buscaTodos, buscaAlunoPorId } = require("../repository/alunos.repository")


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
        
    }
}