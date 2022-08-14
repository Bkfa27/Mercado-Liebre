const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

const path = require('path');

app.use(express.static('public'));

app.listen(process.env.PORT, () =>{
    console.log('Servidor escuchando en el puerto ' + process.env.PORT)
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./views/home.html"))
});

app.get('/register.html', function(req, res) {
    res.sendFile(path.join (__dirname, "./views/register.html"))
})

app.get('/login.html', function(req, res) {
    res.sendFile(path.join (__dirname, "./views/login.html"))
})

/* app.listen(3000, () =>
    console.log("Levantando un servidor con Express")); */ /* Sustituyo por el comando en la línea 
 */