var mongoose = require("mongoose");

var Schema = mongoose.Schema

var LyricsSchema = new Schema({
    songName: {
        type: String,
        required: true
    },
    lyrics: [{
        type: String,
        required: true
    }],
    setlists: [{
        type: Schema.Types.ObjectId,
        ref: "Setlist"
    }]

});

var Lyrics = mongoose.model("Lyrics", LyricsSchema);

module.exports = Lyrics;