var express = require("express");
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'pug');     //Używamy Puga jako kreatora widoku
app.set('views', './views');       //widoki trzymamy w katalogu ./views

app.get('/login', function (req, res) {
    res.render('login', {
        url: "/auth/google"
    })
});

app.get('/auth/google', function (req, res) {
    res.render('google', {
        user: { name: "Jan", lastName: "Kowalski" }
    });
});


var server = app.listen(3000, 'localhost', function () {
    var host = server.address().address;
    var port = server.address().port;    
});

app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});

