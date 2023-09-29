const { buscaTodos } = require("../repository/alunos.repository")


module.exports = {
    listaAlunos: (req, res)=>{
        const data = buscaTodos();
        console.log(data);
        res.send(data)
    }
}