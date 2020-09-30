const List = require('../models/list.model')

module.exports = {
    getAll: (req, res) => {
        List.find()
            .then(data => res.send(data))
            .catch(err => { console.log(err) })
    },
    create: async(req, res) => {
        // body req
        let title = req.body.title;
        // new List
        let newList = new List({
                title
            })
            // save data to mongodb
        newList.save()
            .then(data => res.send(data))
            .catch(err => console.log(err))
    },
    update: (req, res) => {

        List.findOneAndUpdate({ _id: req.params.id }, {
            $set: req.body
        }).then(data => res.sendStatus(200)).catch(err => console.log(err))

    },
    delete: (req, res) => {
        List.findOneAndDelete({ _id: req.params.id })
            .then(res.sendStatus(200))
            .catch(err => console.log(err))
    }

}