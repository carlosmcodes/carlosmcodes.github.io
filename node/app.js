var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use(require('./routes'));

//  these get the path of the external files and
//  import them into our ejs
const path = require('path');

// grabs verifyInput.js file
app.use('/form', express.static(path.join(__dirname, '../form')));

app.use(express.static(path.join(__dirname, '../style')));

app.use('/resources', express.static(path.join(__dirname, '../resources')));

app.listen(3000);