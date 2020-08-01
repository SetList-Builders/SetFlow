var mongoose = require("mongoose");

var Schema = mongoose.Schema

var gigSchema = new Schema({

    name:{
        type: String,
        required: true
    },
    setlistList:{
        type: Schema.Types.ObjectId,
        ref: "Setlist"
    },
    location:{
        type: String,
        required: true
    }
});
var Gig = mongoose.model("Gig", gigSchema);

module.exports = Gig;