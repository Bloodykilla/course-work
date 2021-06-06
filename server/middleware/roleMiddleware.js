
//DATABASE RECONNECT METHOD
const jwt = require('jsonwebtoken')
require ('dotenv').config()

//let connectionString;
//let Pool = require('pg').Pool

module.exports = function(role) {

    return  function (req, res, next) {

            if (req.method === "OPTIONS") {
                next()
            }

        try {

            const jwtToken = req.headers.authorization.split(' ')[1];


            if (!jwtToken) {
                return res.status(403).json({message:'Not authorized'})
            }

            const decoded = jwt.verify(jwtToken, process.env.SECRET_KEY);
            if (decoded.role !== role)  {
                
                return res.status(403).json({message:'Does not have premissions'})
            }

            /*if (decoded.role === "ADMIN") {


 
                connectionString = process.env.ADMIN_URL
                let pool = new Pool({connectionString})
                pool.connect()
                .then(() => console.log(`Admin connected to database!`))
                .finally(pool.end())


            }

            if (decoded.role === "MANAGER") {


                let Pool = require('pg').Pool
                connectionString = process.env.MANAGER_URL
                let pool = new Pool({connectionString})
                pool.connect()
                .then(() => console.log(`Manager connected to database!`))
                .finally(pool.end())
            } 

            if (decoded.role === "USER") {


                let Pool = require('pg').Pool
                connectionString = process.env.AUTH_USER_URL
                let pool = new Pool({connectionString})
                pool.connect()
                .then(() => console.log(`User connected to database!`))
                .finally(pool.end())
            } */


            req.user = decoded
           
            next()

        } catch(err) {
            console.log(err.message);
            return res.status(403).json({message:'Not authorize'});
        }
    }
}
