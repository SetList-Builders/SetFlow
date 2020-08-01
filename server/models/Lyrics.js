var mongoose = require("mongoose");

var Schema = mongoose.Schema

var Lyrics = new Schema({
    songName: {
        type: String,
        required: true
    },
    lyrics: {
        type: String,
        required: true
    },
});

var Lyrics = mongoose.model("Lyrics", Lyrics);

module.exports=Lyrics;