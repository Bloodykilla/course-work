const db = require('../db')


class roomTypeController {
    async create(req,res) {
        const {name} = req.body
        const room_type = await db.query(`INSERT INTO room_type (name) VALUES($1) RETURNING *`,[name])
        res.json(room_type.rows[0])
    }

    async getAll(req,res) {
        const room_types = await db.query(`SELECT * FROM room_type`)
        res.json(room_types.rows)
    }

    async getOne(req,res) {
        const id = req.params.id
        const room_type = await db.query (`SELECT * FROM room_type where id = $1`,[id])
        res.json(room_type.rows[0])
    }

    async update(req,res) {
        const {id,name} = req.body
        const room_type = await db.query(`UPDATE room_type set name = $1 where id = $2 RETURNING *`,[name,id] )
        res.json(room_type.rows[0])
    }

    async delete(req,res) {
        const id = req.params.id
        const room_type = await db.query(`DELETE from room_type where id = $1`,[id])
        res.json(room_type.rows[0])
    }
}
module.exports = new roomTypeController()