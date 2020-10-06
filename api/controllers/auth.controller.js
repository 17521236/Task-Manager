const User = require('../models/user.model');
const md5 = require('md5')

module.exports = {
    login: async(req, res) => {
        let users;

        await User.find({
                email: req.body.email,
                password: md5(req.body.password)
            })
            .then(value => {
                if (value.length === 0) {
                    res.send({
                        result: '0',
                        message: "Login failed. Email or Password wrong !!!"
                    })
                } else {
                    res.send({
                        result: '1',
                        user: value[0]
                    })
                }
            })
            .catch(err => res.send(err))
    }
}