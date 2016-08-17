var express = require('express')
const bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


//	Used for deployment. 
app.use(express.static(__dirname + '/www'))


//	Listening on port 4000
var server = app.listen(4000, function () {
  var port = server.address().port
  console.log('Example app listening at port: ', port)
})

