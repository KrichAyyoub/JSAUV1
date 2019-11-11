// Import packages
const express = require('express')
const morgan = require('morgan')// App
const app = express()// Morgan
app.use(morgan('tiny'))// First route
app.get('/', (req, res) => {
    res.json({ message: 'jsau-apiserver-1.0.0' })
})// Starting server
app.listen('8081')