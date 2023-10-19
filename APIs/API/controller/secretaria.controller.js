const { buscaTodos, insertTurma } = require("../repository/secretaria.repository")
const buscaProfessor = require("../repository/professores.repository").buscaPorId
const buscaAluno = require("../repository/alunos.repository").
module.exports={
    buscaTodos: (req, res) =>{
         buscaTodos().then((data)=>{
            res.send(data)
        }).catch((error)=>{
            res.status(500).send({message: "Erro ao consultar turmas"});
        })
    },
    vincularProfAlunos: async(req, res) =>{
        const {professor_id, aluno_id} = req.body;
        const data ={professor_id, aluno_id};

        const existProfessor = await buscaProfessor(professor_id);
        const existAlunos = await buscaAluno(aluno_id);

        if(existProfessor.lenght <= 0){
            return res.status(404).send({message: "ID do professor não existe na tabela professores!"})
        }

        if(existAlunos. lenght <=0){
            return res.status(404).send({message: "ID do aluno não existe na tabela alunos!"})
        }

        await insertTurma(data).then((data)=>{
            return res.send({message: "Vínculo realizado com sucesso!"})
        }).catch((error)=>{
            console.log(error);
           return  res.status(500).send({message: "Erro ao realizar o vínculo da turma!"})
        });
        
    }

    
}