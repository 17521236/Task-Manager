const List = require('../models/list.model');
const Task = require('../models/task.model');

module.exports = {
    getAll: (req, res) => {
        List.find()
            .then(data => res.send(data))
            .catch(err => res.send(err))
    },
    getOne: (req, res) => {
        List.findById({ _id: req.params.id })
            .then(data => res.send(data))
            .catch(err => res.send(err));
    },
    create: async(req, res) => {
        let title = req.body.title;
        List.create({ title })
            .then(data => res.send(data))
            .catch(err => res.send(err))
    },
    update: (req, res) => {

        List.findOneAndUpdate({ _id: req.params.id, _listId: req.params.listId }, {
                $set: req.body
            }).then(data => res.send(data))
            .catch(err => res.send(err))

    },
    delete: (req, res) => {
        List.findOneAndDelete({ _id: req.params.id })
            .then(data => {
                Task.deleteMany({ _listId: data._id }).then(() => {
                    console.log('delete all tasks list')
                });
                res.send(data);
            })
            .catch(err => res.send(err))
    }

}