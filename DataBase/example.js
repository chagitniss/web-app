var mongoose = require('mongoose');
var Schema= mongoose.Schema;

var exampleSchema = new Schema({
    Ex_id : Number,
    Ex_value : Number
});
module.exports = exampleSchema;
