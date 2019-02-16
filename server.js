var express = require('express'); // for routing
var app = express(); //init the server
var path = require('path');
var port = process.env.PORT || 3000;

//initialization for using POST calls
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));//read URL encoded
app.use(bodyParser.json()); //read json data

app.use(express.static(__dirname+'/client'));
//app.use('/app', express.static('app'));

app.use('/serverController',require('./controllers/serverController'));

app.get('/',function (req, res) {
    res.sendFile(path.join(__dirname+'/client/index.html'));
});

//listen on port
var server = app.listen(port, function(){
    console.log('Server listening at http://' + server.address().address + ':' + server.address().port);
});