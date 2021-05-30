const uuid = require('uuid')
const path = require('path')
const db = require('../db')

class hotelController {
    async create(req,res) {
        const {name,adress,hotel_type_id, city_id,rang} = req.body
        const {img} = req.files
        let fileName = uuid.v4() + '.jpg'
        img.mv(path.resolve(__dirname, '..', 'static', fileName))
        const hotel = await db.query(`INSERT INTO hotel (name, adress,hotel_type_id, city_id,rang, img) VALUES($1,$2,$3,$4,$5,$6) RETURNING *`,[name,adress,hotel_type_id, city_id,rang,filename])
        res.json(hotel.rows[0])
    }

    async getAll(req,res) {
        let {city_id, rang, hotel_type_id} = req.query
        let hotels
        if (!city_id && !rang && !hotel_type_id) {
            hotels = await db.query(`SELECT * FROM hotelinfo`)
        }
        if (city_id && !rang && !hotel_type_id) {
            hotels = await db.query(`SELECT * FROM hotelinfo WHERE city_id = $1`,[city_id])
        }
        if (!city_id && rang && !hotel_type_id) {
            hotels = await db.query(`SELECT * FROM hotelinfo WHERE rang =$1`,[rang])
        }
        if (city_id && rang && hotel_type_id) {
            hotels = await db.query(`SELECT * FROM hotelinfo WHERE city_id = $1 and rang = $2 and hotel_type_id = $3`,[city_id, rang, hotel_type_id])
        }
        if (!city_id && rang && hotel_type_id) {
            hotels = await db.query(`SELECT * FROM hotelinfo WHERE hotel_type_id = $1 and rang = $2 and hotel_type_id = $3`,[ hotel_type_id, rang])
        }
        if (city_id && !rang && hotel_type_id) {
            hotels = await db.query(`SELECT * FROM hotelinfo WHERE city_id = $1 and hotel_type_id = $2`,[city_id, hotel_type_id])
        }
        if (city_id && rang && !hotel_type_id) {
            hotels = await db.query(`SELECT * FROM hotelinfo WHERE city_id = $1 and rang = $2`,[city_id, rang])
        }
        res.json(hotels.rows)
    }

    async getOne(req,res) {
        const id = req.params.id
        const hotel = await db.query (`SELECT * FROM hotel where id = $1`,[id])
        res.json(hotel.rows[0])
    }

    async update(req,res) {
        const {id,adress,hotel_type_id, city_id,rang,name} = req.body
        const hotel = await db.query(`UPDATE hotel set name = $1, rang = $2, city_id = $3, adress = $4, hotel_type_id = $5 where id = $6 RETURNING *`,[id,adress,hotel_type_id, city_id,rang,name] )
        res.json(hotel.rows[0])
    }

    async delete(req,res) {
        const id = req.params.id
        const hotel = await db.query(`DELETE from hotel where id = $1`,[id])
        res.json(hotel.rows[0])
    }


}
module.exports = new hotelController()