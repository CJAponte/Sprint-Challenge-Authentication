/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

const jwt = require('jsonwebtoken')

const secrets = require('../config/secrets.js')

module.exports = (req, res, next) => {
    const token = req.headers.token

    if(token){
        console.log("2", token)
        jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
            if(err) {
                res.status(401).json({you: 'shall not pass!'})
            } else {
                req.user = {username: decodedToken.username}
                next()
            }
        })
    } else{
        console.log("1", token)
        res.status(400).json({message: 'no token found'})
    }
}