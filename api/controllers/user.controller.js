const User = require('../models/user.model')
const md5 = require('md5')

module.exports = {
    create: (req, res) => {

        let newUser = {
            email: req.body.email,
            password: md5(req.body.password)
        }

        User.create(newUser)
            .then(value => res.send(value))
            .catch(err => res.send(err))
    }
}