const db = require('../db')

class hotelTypeController {
    async create(req,res) {
        const {name} = req.body
        const hotel_type = await db.query(`INSERT INTO hotel_type (name) VALUES($1) RETURNING *`,[name])
        res.json(hotel_type.rows[0])
    }

    async getAll(req,res) {
        const hotel_types = await db.query(`SELECT * FROM hotel_type`)
        res.json(hotel_types.rows)
    }

    async getOne(req,res) {
        const id = req.params.id
        const hotel_type = await db.query (`SELECT * FROM hotel_type where id = $1`,[id])
        res.json(hotel_type.rows[0])
    }

    async update(req,res) {
        const {id,name} = req.body
        const hotel_type = await db.query(`UPDATE hotel_type set name = $1 where id = $2 RETURNING *`,[name,id] )
        res.json(hotel_type.rows[0])
    }

    async delete(req,res) {
        const id = req.params.id
        const hotel_type = await db.query(`DELETE from hotel_type where id = $1`,[id])
        res.json(hotel_type.rows[0])
    }
}
module.exports = new hotelTypeController()