const conn = require('../mysql.knex');

module.exports = {
    buscaTodos: async() => {
        return await conn.select().from("alunos")
        // SELECT * FROM ALUNOS;
    },

    buscaAlunoPorId: async(id)=>{
        return await conn.select().from("alunos").where({id: id})
        //SELECT * FROM ALUNOS WHERE ID = 1;
    },

    inserir: async(data)=>{
        return await conn.insert(data).into("alunos")
        //INSERT INTO ALUNOS (id, nome, idade, email) values(null, "Otávio", 16, "otavioabatii@gmail.com");
    },

    atualizar: async(id, data)=>{
        return await conn("alunos").update(data).where({id: id})
        //UPDATE TABELA SET SEXO="M", IDADE=17, CPF="086.706.340-82" WHERE ID=1;
    },

    deletar: async(id)=>{
        return await conn("alunos").where({id: id}).del();
        //DELETE FROM ALUNOS WHERE ID = 7;
    }
};

