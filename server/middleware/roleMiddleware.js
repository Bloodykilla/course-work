

//DATABASE RECONNECT METHOD
const jwt = require('jsonwebtoken')
require ('dotenv').config()
const db = require('../db')

let connectionString;


module.exports = function(role) {

    return  function (req, res, next) {

            if (req.method === "OPTIONS") {
                next()
            }

        try {

            const jwtToken = req.headers.authorization.split(' ')[1];
            let pool = require('pg').Pool;

            if (!jwtToken) {
                return res.status(403).json('Not authorized')
            }

            const decoded = jwt.verify(jwtToken, process.env.SECRET_KEY);
            if (decoded.role != role)  {
                
                return res.status(403).json('Does not have premissions')
            }

            if (decoded.role === "ADMIN") {

                db.end();
 
                connectionString = process.env.ADMIN_URL
                let pool = new Pool({connectionString})
                pool.connect()
                .then(() => console.log(`Admin connected to database!`))


            }

            if (decoded.role === "MANAGER") {

                db.end();
                let Pool = require('pg').Pool
                connectionString = process.env.MANAGER_URL
                let pool = new Pool({connectionString})
                pool.connect()
                .then(() => console.log(`Manager connected to database!`))


            } 
            else {
                db.end()
                let Pool = require('pg').Pool
                connectionString = process.env.READ_ONLY_URL
                let pool = new Pool({connectionString})
                pool.connect()
                .then(() => console.log(`Readonly connected to database!`))
            }

            req.user = decoded
            next()

        } catch(err) {
            console.log(err.message);
            return res.status(403).json('Not authorize');
        }
    }
}
