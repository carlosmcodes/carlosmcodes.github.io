var express = require('express');

var app = express();
app.set('view engine', 'ejs');

const path = require('path');
// const form = path.join(__dirname, '../form');
const index = path.join(__dirname, '../');
const style = path.join(__dirname, '../style');


// app.use(express.static(form));
app.use(express.static(index));
app.use(express.static(style));
app.get('/profile', function(req, res){
    res.render('profile');
});

app.get('/404', function(req, res){
    res.render('404');
});

app.get('/form', function(req, res){
    res.render('form');
});

app.get('/carlos', function(req, res){
    res.render('carlos');
});
app.listen(3000);