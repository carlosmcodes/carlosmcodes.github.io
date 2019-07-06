const express = require('express');
const app = express();
app.set('view engine', 'ejs');


//hard coded
// app.get('/', function(req,res){
//     res.render('index');

// });
// app.get('/form', function(req,res){
//     res.render('formSheet');


// });


// app.get('/404', function(req,res){
//     res.render('404');


// });


app.get('/', function(req,res){
    res.render('profile');


});

// the :<var> is what gets the func to work
// app.get('/:name', function(req,res){
//     res.sendFile(`requested website value: ${req.params.name}`);
// });


// app.get('/profile/:name', function(req,res){
//     var data = {age: 26, job: 'scoot!', hobbies: ['rugby', 'sports', 'beach days']}
//     res.render('profile', 
//     {person: req.params.name, data: data});
// });

//output
app.listen(3000);
console.log(`Server running at http://127.0.0.1:3000/`);