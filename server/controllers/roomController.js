const db = require('../db')

class roomController {
    async create(req,res) {
        const {number,hotel_id,room_type_id} = req.body


        const room = await db.query(`INSERT INTO room (number,hotel_id,room_type_id) VALUES($1,$2,$3) RETURNING *`,[number,hotel_id,room_type_id])
        res.json(room.rows[0])
    }

    async getAll(req,res) {
        let {country,city,hotel,htype,rtype} = req.query
        let rooms
        if (!country && !city && !hotel && !htype && !rtype) {
            rooms = await db.query(`SELECT * FROM roominfo`)
        }
        if (!country && city && !hotel && !htype && !rtype) {
            rooms = await db.query(`SELECT * FROM roominfo WHERE city = $1`,[city])
        }
        if (!country && !city && hotel && !htype && !rtype) {
            rooms = await db.query(`SELECT * FROM roominfo WHERE hotel =$1`,[hotel])
        }
        if (!country && !city && !hotel && htype && !rtype) {
            rooms = await db.query(`SELECT * FROM roominfo WHERE htype= $1`,[htype])
        }
        if (country && !city && !hotel && !htype && !rtype) {
            rooms = await db.query(`SELECT * FROM roominfo WHERE  country= $1`,[country])
        }
        
        res.json(rooms.rows)
    }

    async getOne(req,res) {
        const id = req.params.id
        const room = await db.query (`SELECT * FROM room where id = $1`,[id])
        res.json(room.rows[0])
    }

    async update(req,res) {
        const {id,number,hotel_id,room_type_id} = req.body
        const room = await db.query(`UPDATE room set number = $1, hotel_id = $2, room_type_id = $3 where id = $4 RETURNING *`,[number,hotel_id,room_type_id,id] )
        res.json(room.rows[0])
    }

    async delete(req,res) {
        const id = req.params.id
        const room = await db.query(`DELETE from room where id = $1`,[id])
        res.json(room.rows[0])
    }


}

module.exports = new roomController()