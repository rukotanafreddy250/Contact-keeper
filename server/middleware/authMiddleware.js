const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function( req, res, next ) {
    // get token from headers
    const token = req.header('x-auth-token');

    // Check if not token
    if(!token) {
        return res.status(401).json({
            message: ` No Token, Authorization Denied `
        })
    }

    try {
        const decode = jwt.verify(token, config.get('jwtSecret'));
        console.log(decode);
        req.user = decode.user;
        next();
    }catch (err) {
        res.status(500).json({
            message: `Error message: Token Is Not Valid ${err.message}`
        })
    }
}