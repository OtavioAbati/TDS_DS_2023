const { buscaTodos } = require("../repository/secretaria.repository")

module.exports={
    buscaTodos: (req, res) =>{
         buscaTodos().then((data)=>{
            res.send(data)
        }).catch((error)=>{
            res.status(500).send({message: "Erro ao consultar turmas"});
        })

    }
    
}