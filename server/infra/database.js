const pgp = require('pg-promise')()
const db = pgp({
  user: 'postgres',
  password: 'senha',
  host: 'localhost',
  port: 5432,
  database: 'busscontroll'
})

module.exports = db
