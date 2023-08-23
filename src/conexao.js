// const { Client } = require('pg');
const { Pool } = require('pg');

// 
//     const client =  new Client({
//         host: 'localhost',
//         port: 5432,
//         user: 'postgres',
//         password: '1234',
//         database: 'aula_conexao_node_pg'
//     }); 

    const pool =  new Pool({
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: '1234',
        database: 'aula_conexao_node_pg'
    }); 

    module.exports = pool