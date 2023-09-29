const conn = require('../mysql.knex');

module.exports = {
    buscaTodos: () => {
        return conn.select().from("alunos")
    },
}