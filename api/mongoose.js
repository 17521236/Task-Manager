const mongoose = require('mongoose')
const uri = "mongodb+srv://admin:l4tsewzhLLCFZ0Mi@cluster0.zsn3f.gcp.mongodb.net/task-manager?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Mongodb connected successfully...')
    })
    .catch((err) => {
        console.log('Mongo connected failed !!!');
        console.log(err);
    })


mongoose.set('useFindAndModify', false);