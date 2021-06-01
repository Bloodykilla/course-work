const db = require('../db')

class cityController {

    async create(req,res) {
        const {name, country_id} = req.body
        const city = await db.query(`INSERT INTO city (name, country_id) VALUES($1,$2) RETURNING *`,[name,country_id])
        res.json(city.rows[0])
    }

    async getAll(req,res) {
        let {name,country_name} = req.query
        let cities
        if (!name &&  !country_name) {
            cities = await db.query(`SELECT * FROM cityInfo`)
        }
        if (name && !country_name) {
            cities = await db.query(`SELECT * FROM cityInfo where name = $1`,[name])
        }
        if (  !name && country_name) {
            cities = await db.query(`SELECT * FROM cityInfo where country_name = $1 `,[country_name])
        }
        if (  name && country_name) {
            cities = await db.query(`SELECT * FROM cityInfo where country_name = $1 and name = $2`,[country_name, name])
        }
        res.json(cities.rows)
    }

    async getOne(req,res) {
        const id = req.params.id
        const city = await db.query (`SELECT * FROM cityInfo where id = $1`,[id])
        res.json(city.rows[0])
    }

    async update(req,res) {
        const {id,name,country_id} = req.body
        const city = await db.query(`UPDATE city set name = $1, country_id = $2 where id = $3 RETURNING *`,[name,country_id,id] )
        res.json(city.rows[0])
    }

    async delete(req,res) {
        const id = req.params.id
        const city = await db.query(`DELETE from city where id = $1`,[id])
        res.json(city.rows[0])   
    }
 


}
module.exports = new cityController()