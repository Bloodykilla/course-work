const uuid = require('uuid')
const path = require('path')
const db = require('../db')

class tourController {
    async create(req,res) {
        const {name,price,tour_type_id,date_to,date_back,check_in,check_out,room_id} = req.body
        const {img} = req.files
        let fileName = uuid.v4() + '.jpg'
        img.mv(path.resolve(__dirname, '..', 'static', fileName))
        const tour = await db.query(`INSERT INTO tour (name,price,tour_type_id,date_to,date_back,check_in,check_out,room_id,img) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *`,[name,price,tour_type_id,date_to,date_back,check_in,check_out,room_id,fileName])
        res.json(tour.rows[0])
    }

    async getAll(req,res) {
        let {tour,price,to,back,ttype, country,hrang,htype, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let tours
        if (tour && price && ttype && to && country) {
         tours = await db.query(
             `SELECT * FROM tourinfo where tour = $1 and price = $2 and ttype = $3 and to = $4 and country = $5`,
             [tour,price,ttype,to,coutnry,limit,offset]
             )}

        if (!tour && !price && ! ttype && !to ) {
         tours = await db.query(
             `SELECT * FROM tourinfo `,
             ),[limit,offset]
        }
        if (tour && !price && !ttype && !to) {
            tours = await db.query(
                `SELECT * FROM tourinfo where tour = $1`,[tour,limit,offset]
            )
        }
        if (!tour && !price && ttype && !to && !back && !country && !hrang && !htype) {
            tours = await db.query(
                `SELECT * FROM tourinfo where ttype = $1`,[ttype,limit,offset]
            )
        }
        if (!tour && price && !ttype && !to && !back && !country && !hrang && !htype) {
            tours = await db.query(
                `SELECT * FROM tourinfo where price between  MIN(price) and $1`,[price,limit,offset]
            )
        }      
        if (!tour && !price && !ttype && to && !back && !country && !hrang && !htype) {
            tours = await db.query(
                `SELECT * FROM tourinfo where to =$1`,[to,limit,offset]
            )
        }    
        if (!tour && !price && !ttype && !to && !back && country && !hrang && !htype) {
            tours = await db.query(
                `SELECT * FROM tourinfo where country = $1`,[country,limit,offset]
            )
        }  
        
        if (!tour && !price && !ttype && !to && !back && !country && hrang && !htype) {
            tours = await db.query(
                `SELECT * FROM tourinfo where hrang = $1`,[hrang],limit,offset
            )
        } 
        res.json(tours.rows)
    }

    async getOne(req,res) {
        const id = req.params.id
        const tour = await db.query (`SELECT * FROM tourinfo where id = $1`,[id])
        res.json(tour.rows[0])
    }

    async update(req,res) {
        const {id,name,price,tour_type_id,room_id} = req.body
        const tour = await db.query(`UPDATE tour set name = $1, price = $2, tour_type_id = $3, room_id = $4 where id = $5 RETURNING *`,[name, price, tour_type_id,room_id,id])
        res.json(tour.rows[0])
    }

    async delete(req,res) {
        const id = req.params.id
        const tour = await db.query(`DELETE from tour where id = $1`,[id])
        res.json(tour.rows[0])
    }

}
module.exports = new tourController()