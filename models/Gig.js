var mongoose = require("mongoose");

var Schema = mongoose.Schema

var Gig = new Schema({

    name:{
        type: String,
        required: true
    },
    setlistList:{
        type:[String]
    },
    location:{
        type: String,
        required: true
    }
});
var Gig = mongoose.model("Gig", Gig);

module.exports = Gig;