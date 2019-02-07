var express = require('express');
var app = express();
const sever = app.listen();
app.use(express.static(__dirname + "/static"));
app.get('/', function(req, res){
    res.render('index')
});

app.listen(8000, function(){
    console.log("listening on port 8000")
});