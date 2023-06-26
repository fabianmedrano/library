const mysql = require('mysql2')
const { promisify } = require('util')
require('dotenv').config()

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT
})

const queryAsync = promisify(connection.query).bind(connection)

module.exports = {
  queryAsync
}
