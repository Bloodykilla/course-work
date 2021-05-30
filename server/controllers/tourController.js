const uuid = require('uuid')
const path = require('path')
const db = require('../db')

class tourController {
    async create(req,res) {
        const {name,price,tour_type_id,date_to,date_back,check_in,check_out,aviability,room_id} = req.body
        const {img} = req.files
        let fileName = uuid.v4() + '.jpg'
        img.mv(path.resolve(__dirname, '..', 'static', fileName))
        const tour = await db.query(`INSERT INTO tour (name,price,tour_type_id,date_to,date_back,check_in,check_out,aviability,room_id,img) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *`,[name,price,tour_type_id,date_to,date_back,check_in,check_out,aviability,room_id,fileName])
        res.json(tour.rows[0])
    }

    async getAll(req,res) {
        let {tour,price,to,back,ttype, country,hrang,htype} = req.query

        let tours
        if (tour && price && ttype && to ) {
         tours = await db.query(
             `SELECT * FROM TourInfo where tour = $1 and price = $2 and ttype = $3 and to = $4`,
             [tour,price,ttype,to]
             )}

        if (!tour && !price && ! ttype && !to ) {
         tours = await db.query(
             `SELECT * FROM TourInfo `,
             )
        }
        if (tour && !price && !ttype && !to) {
            tours = await db.query(
                `SELECT * FROM TourInfo where tour = $1`,[tour,limit]
            )
        }
        if (!tour && !price && ttype && !to && !back && !country && !hrang && !htype) {
            tours = await db.query(
                `SELECT * FROM TourInfo where ttype = $1`,[ttype]
            )
        }
        if (!tour && price && !ttype && !to && !back && !country && !hrang && !htype) {
            tours = await db.query(
                `SELECT * FROM TourInfo where price between  MIN(price) and $1`,[price]
            )
        }      
        if (!tour && !price && !ttype && to && !back && !country && !hrang && !htype) {
            tours = await db.query(
                `SELECT * FROM TourInfo where to =$1`,[to]
            )
        }    
        if (!tour && !price && !ttype && !to && !back && country && !hrang && !htype) {
            tours = await db.query(
                `SELECT * FROM TourInfo where country = $1`,[country]
            )
        }  
        
        if (!tour && !price && !ttype && !to && !back && !country && hrang && !htype) {
            tours = await db.query(
                `SELECT * FROM TourInfo where hrang = $1`,[hrang]
            )
        } 
        res.json(tours.rows)
    }

    async getOne(req,res) {
        const id = req.params.id
        const tour = await db.query (`SELECT * FROM TourInfo where id = $1`,[id])
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