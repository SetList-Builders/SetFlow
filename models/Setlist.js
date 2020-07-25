var mongoose = require("mongoose");

var Schema = mongoose.Schema

var Setlist = new Schema({
    name:{
        type: String,
        required: true
    },
    songs:{
        type:[String]
    }
})