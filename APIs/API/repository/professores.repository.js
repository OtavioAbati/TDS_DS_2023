const conn = require('../mysql.knex');

module.exports ={
    buscaProfessor: async()=>{
        return await conn.select().from("professor")
    },

    buscaProfessorId: async(id)=>{
        return await conn.select().from("professor").where({id: id})
    },

    insertProfessor: async(data)=>{
        return await conn.insert(data).from("professor")
    },

    updateProfessor: async(id, data)=>{
        return await conn("professor").update(data).where({id:id})
    },

    deleteProfessor: async(id,data)=>{
        return await conn("professor").where({id: id}).del();
    }
};