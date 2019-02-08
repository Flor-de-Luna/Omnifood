var express = require('express');
var app = express();
const sever = app.listen();
const path = require('path');

app.use(express.static(__dirname + "static"));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'static'))); //dynamically register css

app.get('/', function(req, res){
    res.render('index')
});

app.listen(8000, function(){
    console.log("listening on port 8000")
});