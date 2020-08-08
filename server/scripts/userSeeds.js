const mongoose = require("mongoose")
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/setflow"
)

async function seedUser() {
  const userSeed = [
    {
      username: "mezamic000@gmail.com",
      token: ""
    }
  ]
  db.User
    .deleteMany({})
    .then(() => db.User.create(userSeed)
      .then(data => {
        console.log("users records inserted!")
      })
      .catch(err => {
        console.log(err)
        process.exit(1)
      }))
}

//module.exports = {seedUser}
seedUser()


