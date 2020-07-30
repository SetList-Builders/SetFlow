var mongoose = require("mongoose");

var Schema = mongoose.Schema

var setlistSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    songs:{
        type:[String]
    },
    gigs: {
        type: Schema.Types.ObjectId,
        ref: "Gig"
    }
})

const Setlist = mongoose.model("Setlist", setlistSchema)
module.exports = Setlist