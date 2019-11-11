

// Import packages
const express = require('express')
const morgan = require('morgan')
const nunjucks = require('nunjucks')
// App
const app = express()
// Morgan
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(require('../routes/index.routes'))

nunjucks.renderString('Hello {{ username }}', { username: 'James' });
//First route


nunjucks.configure('src/', {
    autoescape: true,
    express: app
});


app.get('/', function(req, res) {
    res.render('index.html');
});


// Second route
app.get('/info', (req, res) => {
    res.json({message: 'jsau-apiserver-1.0.0'})
})

// Starting server
app.listen('8081')