const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const port = 3000;
const listRouter = require('./routes/list.route')


// load mongodb
const mongoose = require('./mongoose')

// load middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// enable CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST,PUT,PATCH,DELETE,GET,HEAD,OPTIONS")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// router here
app.use('/lists', listRouter);

// connection
app.listen(port, () => {
    console.log('Port 3000 is running ...')
})