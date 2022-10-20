const {Client} = require('pg')

const client = new client ({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "password",
    database: "postgres"
})

module.exports= client