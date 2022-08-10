const express = require('express');

const app = express();

const path = require('path');

app.use(express.static('public'));

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, "./views/home.html"))
});

app.get('/register.html', function(req, res) {
    res.sendFile(path.join (__dirname, "./views/register.html"))
})

app.get('/login.html', function(req, res) {
    res.sendFile(path.join (__dirname, "./views/login.html"))
})

app.listen(3000, () =>
    console.log("Levantando un servidor con Express"));