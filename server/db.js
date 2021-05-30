const Pool = require('pg').Pool


const pool = new Pool ({

    user:'itsadmin',
    password:'admin',
    host:'localhost',
    database:'travel_agency',
    port:5432

})



module.exports = pool