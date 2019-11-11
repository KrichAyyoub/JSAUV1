

// Import packages
const express = require('express')
const morgan = require('morgan')
// App
const app = express()
// Morgan
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(require('../routes/index.routes'))


//First route

app.get('/', (req, res) => {
    res.json({message: 'Welcome to my first News Broadcaster with NodeJS :)'})
})


// Second route
app.get('/info', (req, res) => {
    res.json({message: 'jsau-apiserver-1.0.0'})
})

// Starting server
app.listen('8081')