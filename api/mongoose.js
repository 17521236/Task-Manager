const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/task-manager', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Mongodb connected successfully...')
    })
    .catch((err) => {
        console.log('Mongo connected failed !!!');
        console.log(err);
    })


mongoose.set('useFindAndModify', false);