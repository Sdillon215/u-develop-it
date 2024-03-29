const mysql = require('mysql2');
require('dotenv').config();


// connect to db
const db = mysql.createConnection(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: 'election'
    },
    console.log('Connected to the election database')
);

module.exports = db;