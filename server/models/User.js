var mongoose = require("mongoose");

var Schema = mongoose.Schema

var UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    gigs: [{
        type: Schema.Types.ObjectId,
        ref: "Gig"
    }],
    setlist: [{
        type: Schema.Types.ObjectId,
        ref: "Setlist"
    }]
    // token: {

    // }
})

var User = mongoose.model("User", UserSchema);

module.exports = User;

//token data type unknown at this time