var mongoose = require("mongoose");

var Schema = mongoose.Schema

var User = new Schema({
    username: {
        type: String,
        required: true
    },
    token: {

    }
})

//token data type unknown at this time