var mongoose = require("mongoose");

var Schema = mongoose.Schema

var gigSchema = new Schema({
    user:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    setlists:[{
        type: Schema.Types.ObjectId,
        ref: "Setlist"
    }]
});
var Gig = mongoose.model("Gig", gigSchema);

module.exports = Gig;