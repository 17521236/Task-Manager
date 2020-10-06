const Task = require('../models/task.model')

module.exports = {
    getAll: (req, res) => {
        Task.find({ _listId: req.params.listId })
            .then(data => res.send(data))
            .catch(err => res.send({
                result: '0',
                errors: err
            }))
    },
    getOne: (req, res) => {
        Task.findOne({ _id: req.params.id })
            .then(data => res.send(data))
            .catch(err => res.send({
                result: '0',
                errors: err
            }))
    },
    create: (req, res) => {
        Task.create({
                title: req.body.title,
                _listId: req.params.listId
            })
            .then(data => res.send(data))
            .catch(err => res.send({
                result: '0',
                errors: err
            }))
    },
    update: (req, res) => {
        Task.findOneAndUpdate({ _id: req.params.id }, {
                $set: req.body
            })
            .then(() => res.send({ result: '1' }))
            .catch(err => res.send({
                result: '0',
                errors: err
            }))
    },
    delete: (req, res) => {
        Task.findOneAndDelete({ _id: req.params.id, _listId: req.params.listId })
            .then((data) => res.send({
                result: '1',
                data
            }))
            .catch(err => console.log(err))
    }

}