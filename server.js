const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(__dirname+'/dist/front-end'))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname+'/dist/front-end/index.html'));
})

app.listen(process.env.port || 8080, () => {
  console.log(`Example app listening`)
})
