const {listaTodos, listaPorID, inserir, atualizar, deletar} = require('../repository/atribuicao.repository');

module.exports = {
    buscaTodos: (req, res)=>{

        listaTodos().then((data)=>{
            res.send(data);
        }).catch((error)=>{
            res.status(404).send({message: "Erro ao consultar tabela de atribuição"});
        })
    },

    listaPorID: (req, res)=>{
        const {id} = req.params;

        listaPorID(id).then((data)=>{
            res.send(data)
        }).catch((error)=>{
            res.status(500).send({message: "Não foi possível consultar por ID"});
        })
    },

    insert: (req, res)=>{
        const data = {atribuicao} = req.body;
        var status = {status} = new Boolean;

        inserir(data).then((data)=>{
            res.status(200).send({message: "Registro inserido com sucesso!"});
        }).catch((errror)=>{
            res.status(500).send({message: "Erro ao inserir novo registro!"});
        })
    },

    update: (req, res)=>{
        const {id} = req.params;
        const data = req.body;
   
        if (data.id){
            res.status(400).send({message: "Não é possível enviar o parâmetro ID!"});
        }
   
        atualizar(id, data).then((data)=>{
            res.status(200).send({message: "Sucesso ao atualizar!"});
        }).catch((error)=>{
            console.log(error)
            res.status(200).send({message: "Erro ao atulizar"});
        })
    },

    del: (req, res)=>{
        const {id} = req.params;

        deletar(id).then((data)=>{
            res.status(200).send({message: "Sucesso ao deletar registro!"});
        }).catch((error)=>{
            console.log(error)
            res.status(500).send({message: "Erro ao deletar registro"});
        })
    }


}