const mongoose = require("mongoose")
const db = require ("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/setflow"
)


async function allSeeds(){
  let user = await db.User.findOne({ username: "melaniejindali@icloud.com" })
  let setlists = await db.Setlist.find()
  let gigs = await db.Gig.find()

  user.setlists = setlists
  user.gigs = gigs
  console.log(user)
  user.save()

// await require("./userSeeds").seedUser()
// await require("./setlistSeeds").findUserForSetlist()
// await require("./gigsSeeds").findUserForGig()
// await require("./lyricsSeeds").findSetlistForLyrics()
// process.exit(0)
}

allSeeds()
