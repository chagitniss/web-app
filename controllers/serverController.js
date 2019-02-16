var express = require('express');
var router = express.Router();
var config=require('../tsconfig.json');
var qs = require('querystring');
var mongoose = require ('mongoose');
var last_id = 0;
var allLines = {}
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
    console.log("db connected!");
});
var db = mongoose.connect(config.connectionString,{ useNewUrlParser: true });

var ExampleSchema = require('../DataBase/example');
var ExampleList = mongoose.model('example',ExampleSchema);


//routing
router.get('/loadExample', loadExample);
router.post('/addRecord', addRecord);

module.exports = router;

function loadExample(req, res) {
    console.log("in loadExample function");
    //Getting all lines from database in  array
    ExampleList.find({}, function (err, all) {
        if (err)
            res.send(err);
        else
        console.log(all);
        res.json(all); // return the lines in JSON format
    });
}
function addRecord(req,res) {
    console.log("in addRecord");
    ExampleList.find({},function(err,list){
        allLines = list;

        if (!(list.length == 0)) {
            last_id = list[list.length-1].Ex_id;
        }
        else {
            last_id = 0;
        }
        var body = '';
        req.on('data', function (data) {
            body += data;
        });
        req.on('end', function () {
            var POST = qs.parse(body);
            if (POST.Ex_value < 100 && POST.Ex_value >= 0) {
                var newRec = new ExampleList({Ex_id: last_id + 1, Ex_value: POST.Ex_value});
                newRec.save();
                console.log("record added");
                res.send("the value " + POST.Ex_value + " Successfully added!");
            }
        });

    });

}


