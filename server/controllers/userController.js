const db = require('../db');
const bcrypt = require('bcrypt');
const pool = require('../db');
const jwtGenerator = require('../utils/jwtGenerator')


class userController {

    async registration(req, res) {
        
        try {

        const {email,password}= req.body;
        
        const user = await db.query('SELECT * FROM users where email = $1',[email]);

        if (user.rows.length !== 0) {
            return res.status(401).json({message:'user already exist'});
        }
        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);
        const bcryptPassword = await bcrypt.hash(password, salt)

        const newUser = await pool.query(`insert into users(email,password) values ($1,$2) returning*`,
        [email,bcryptPassword])

    

        const token = jwtGenerator(newUser.rows[0].user_id, newUser.rows[0].role, newUser.rows[0].email);

        res.json({token})

    } catch (err) {
        console.log(err.message);
        }


    }

    async login(req, res) {
        try {

            const {email} = req.body

            const user = await db.query('SELECT * FROM users where email =$1',
            [email])

            if (user.rows.length === 0) {
                return res.status(401).json({message:'Password or email is incorret'})
            }

            


            const token = jwtGenerator(user.rows[0].user_id, user.rows[0].role, user.rows[0].email);

            res.json({token})

        } catch(err) {

            console.log(err.message)

        }
    }

    async check(req, res) {
        const token = jwtGenerator(req.user.user_id,  req.user.role, req.user.email,)
        return res.json({token})

    }




}

module.exports = new userController()