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
            return res.status(401).send('user already exist');
        }

        /*const hashPassword = await bcrypt.hash(password, 5)

        const addUser = await db.query(`insert into users(email,password,role) values($1,$2,$3) returning*`,[email,hashPassword,role])
        const basket = await db.query('insert into basket values(user_id) values($1)',[user.id])*/
         
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

            const {email, password} = req.body

            const user = await db.query('SELECT * FROM users where email =$1',
            [email])

            if (user.rows.length === 0) {
                return res.status(401).send('Password or email is incorret')
            }

            const validPassword = await bcrypt.compare(password, user.rows[0].password)
            
            if (!validPassword) {
                return res.status(401).json('Password or email is incorret')
            }


            const token = jwtGenerator(user.rows[0].user_id, user.rows[0].role, user.rows[0].email);

            res.json({token})

        } catch(err) {

            console.log(err.message)

        }
    }

    async check(req, res) {
        const token = jwtGenerator(req.user.user_id, req.user.email, req.user.role)
        return res.json({token})

    }




}

module.exports = new userController()