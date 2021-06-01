
const jwt = require('jsonwebtoken')
require ('dotenv').config()

module.exports = function(req, res, next) {
    try {

        const jwtToken = req.headers.authorization.split(' ')[1];

        if (!jwtToken) {
            return res.status(403).json('Not authorized')
        }

        const decoded = jwt.verify(jwtToken, process.env.SECRET_KEY);

        req.user = decoded
        next()

    } catch(err) {
        console.log(err.message);
        return res.status(403).json('Not authorize');
    }
}