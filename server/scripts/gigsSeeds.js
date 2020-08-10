const mongoose = require("mongoose")
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/setflow"
)

async function findUserForGig() {
  const user = await db.User.findOne({ username: "melaniejindali@icloud.com" })
  const setlists = await db.Setlist.find({})
  const gigSeed = [
    {
      user: user.username,
      name: "Gig 1",
      setlists: [setlists[0]]
    }
  ]
  db.Gig
    .deleteMany({})
    .then(() => db.Gig.create(gigSeed)
      .then(data => {
        console.log("gigs records inserted!")
      })
      .catch(err => {
        console.log(err)
        process.exit(1)
      }))
}

findUserForGig()


//module.exports = { findUserForGig }

