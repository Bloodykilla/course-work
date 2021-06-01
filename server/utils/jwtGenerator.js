const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtGenerator = (user_id, role ,email) => {


    return jwt.sign({user_id,role,email}, process.env.SECRET_KEY,{expiresIn:'24hr'})

}
module.exports = jwtGenerator