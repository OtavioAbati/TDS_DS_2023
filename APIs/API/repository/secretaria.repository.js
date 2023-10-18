
const conn = require("../mysql.knex")

module.exports ={
    buscaTodos: async() =>{
        return await conn.table("turmas").innerJoin('professor', function(){
            this.on('turmas.professor_id', '=', 'professor.id').orOn('turmas.aluno_id', '=', 'aluno.id')
        })

    }
}