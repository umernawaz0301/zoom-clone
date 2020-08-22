const express = require('express')
const app = express()
const { v4: uuidV4 } = require('uuid')
const server = require('http').Server(app)

app.set('view engine', 'ejs') 
app.use(express.static('public'))

app.get('/', (req, res) => {
    // res.status(200).send('hello world')
    res.redirect(`/${uuidV4()}`)
})

app.get('/:room', (req, res) => {
    res.render('room', { roomId: req.params.room })
})


server.listen(3030)