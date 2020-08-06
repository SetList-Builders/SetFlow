const mongoose = require("mongoose")
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/setflow"
)

async function findUserForGig() {
  const user = await db.User.findOne({ username: "User1" })
  const setlists = await db.Setlist.find({})
  const gigSeed = [
    {
      user: user,
      name: "Gig 1",
      setlists: setlists
    }
  ]
  db.Gig
    .deleteMany({})
    .then(() => db.Gig.create(gigSeed)
      .then(data => {
        console.log("records inserted!")
      })
      .catch(err => {
        console.log(err)
        process.exit(1)
      }))
}

findUserForGig()


