require('dotenv').config()

const Pool = require('pg').Pool

const connectionString = process.env.READ_ONLY_URL
const pool = new Pool({
    connectionString
})



module.exports = pool
