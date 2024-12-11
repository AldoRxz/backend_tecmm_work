const mariadb = require('mariadb');
const {dbHost, dbPort, dbUser, dbPassword, dbDatabase} = require("./env.js")

const pool = mariadb.createPool({
    host: dbHost, 
    port: dbPort,
    user: dbUser, 
    password: dbPassword,
    database: dbDatabase
});


module.exports = pool