const express = require('express');
const app = express();
const mongoose = require('mongoose');

const mongoUrl = 'mongodb://localhost:27017/my-home-app'

mongoose.connect(mongoUrl, { useNewUrlParser: true })

const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', mongoUrl)
})

db.on('error', err => {
  console.error('connection error:', err)
})



app.listen(3000, function() {
    console.log('listening on 3000')
})

app.get('/', function(req, res) {
    res.send('Hello World')
})
  
  