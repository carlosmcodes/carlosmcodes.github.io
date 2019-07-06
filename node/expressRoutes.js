const express = require('express');
const app = express();
app.set('view engine', 'ejs');


// helps solve traversing up tree
const path = require('path');
const refinePath = path.join(__dirname, '/../');


//hard coded
app.get('/', function(req,res){
    res.sendFile(refinePath + 'index.html');

});
app.get('/form', function(req,res){
    res.sendFile(refinePath + 'form/formSheet.html');

});


// the :<var> is what gets the func to work
app.get('/:name', function(req,res){
    res.send(`requested website value: ${req.params.name}`);
});


app.get('/profile/:name', function(req,res){
    var data = {age: 26, job: 'scoot!', hobbies: ['rugby', 'sports', 'beach days']}
    res.render('profile', 
    {person: req.params.name, data: data});
});

//output
app.listen(3000);
console.log(`Server running at http://127.0.0.1:3000/`);