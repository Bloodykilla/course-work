const db = require('../db')

class countryController {

    async create(req,res) {
        const {name} = req.body
        const country = await db.query(`INSERT INTO country (name) VALUES($1) RETURNING *`,[name])
        res.json(country.rows[0])
    }

    async getAll(req,res) {
        const countries = await db.query(`SELECT * FROM country`)
        res.json(countries.rows)
    }

    async getOne(req,res) {
        const id = req.params.id
        const country = await db.query (`SELECT * FROM country where id = $1`,[id])
        res.json(country.rows[0])
    }

    async update(req,res) {
        const {id,name} = req.body
        const country = await db.query(`UPDATE country set name = $1 where id = $2 RETURNING *`,[name,id] )
        res.json(country.rows[0])
    }

    async delete(req,res) {
        const id = req.params.id
        const country = await db.query(`DELETE from country where id = $1`,[id])
        res.json(country.rows[0])
    }
}
module.exports = new countryController()