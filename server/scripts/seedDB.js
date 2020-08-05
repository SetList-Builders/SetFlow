const mongoose = require("mongoose")
const db = require ("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/setflow"
)
async function allSeeds(){
await require("./userSeeds").seedUser()
await require("./gigsSeeds").findUserForGig()
await require("./setlistSeeds").findUserForSetlist()
await require("./lyricsSeeds").findSetlistForLyrics()
process.exit(0)
}

allSeeds()
