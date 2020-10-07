const User = require('../models/user.model')
const md5 = require('md5')

module.exports = {
    create: (req, res) => {
        req.body.password=md5(req.body.password);
        User.create(req.body)
            .then(value => res.send(value))
            .catch(err => res.send(err))
    }
}