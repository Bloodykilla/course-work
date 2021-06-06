require('dotenv').config()

const Pool = require('pg').Pool
let connectionString = process.env.SUPER_URL

const pool = new Pool({connectionString})
pool.connect()
.then(() => console.log(`Readonly connected to database!`))

module.exports = pool


