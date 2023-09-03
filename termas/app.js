const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.static('public'))


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/home.html'); 
  });

app.listen((process.env.PORT || 7000), () => {
    console.log(`El servidor esta funcionando en ${process.env.PORT}...`);
    console.log(process.env.PORT)
})