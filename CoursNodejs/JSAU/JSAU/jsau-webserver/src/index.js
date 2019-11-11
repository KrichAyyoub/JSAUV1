'use strict'


const my_shared_code_headless = require('./my_shared_code_headless')
var express = require('express')
var app = express()
const morgan = require('morgan')
app.use(morgan('dev'))

app.get('/', function (req, res) {

  let n = my_shared_code_headless.generateEvenNumbers(20)
  res.send(n)
})

app.listen(3000, function () {
  console.log('now is listening to port 3000')
})
