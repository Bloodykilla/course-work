const db = require('../db')

class tourTypeController {

    async create(req,res) {
        const {name} = req.body
        const tour_type = await db.query(`INSERT INTO tour_type (name) VALUES($1) RETURNING *`,[name])
        res.json(tour_type.rows[0])
    }

    async getAll(req,res) {

        const tour_types = await db.query(`SELECT * FROM tour_type`)
        
        res.json(tour_types.rows)
    }

    async getOne(req,res) {
        const id = req.params.id
        const tour_type = await db.query (`SELECT * FROM tour_type where id = $1`,[id])
        res.json(tour_type.rows[0])
    }

    async update(req,res) {
        const {id,name} = req.body
        const tour_type = await db.query(`UPDATE tour_type set name = $1 where id = $2 RETURNING *`,[name,id] )
        res.json(tour_type.rows[0])
    }

    async delete(req,res) {
        const id = req.params.id
        const tour_type = await db.query(`DELETE from tour_type where id = $1`,[id])
        res.json(tour_type.rows[0])
    }


}
module.exports = new tourTypeController()