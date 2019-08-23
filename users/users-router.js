const router = require('express').Router();

const Users = require('./users-model')
const restricted = require('../auth/restricted-middleware')

router.get('/', restricted, (req, res) => {
    Users.find()
    .then(users => {
        res.json({ loggedInUser: req.user.username, users})
    })
    .catch(error => res.send(error))
})

module.exports = router