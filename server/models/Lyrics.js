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
    },
    //This association to setlists was added in order to be able to search for 
    //setlist by a song in it.  This will be a future improvement
    setlists:[{
        type: Schema.Types.ObjectId,
        ref: "Setlist"
    }]
});

var Lyrics = mongoose.model("Lyrics", LyricsSchema);

module.exports = Lyrics;