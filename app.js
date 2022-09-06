
const express = require('express')
const hbs = require('hbs')
require('dotenv').config()

const app = express()
const port = process.env.PORT

// Handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials', (err) => {})

// Serve static content
app.use( express.static('public') )

// Routes
app.get('/', (req, res) => {
    res.render('home', {
        title: 'Node course',
        name: 'Matías Báez'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        title: 'Node course',
        name: 'Matías Báez'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        title: 'Node course',
        name: 'Matías Báez'
    })
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
})