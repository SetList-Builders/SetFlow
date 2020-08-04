const mongoose = require("mongoose")
const db = require ("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/setflow"
)

const userSeed = [
    {
        username: "User1",
        token: ""
    }
]

db.User
  .deleteMany({})
  .then(() => db.User.create(userSeed))
  .then(data => {
      console.log("records inserted!")
      process.exit(0)
  })
  .catch(err => {
      console.log(err)
      process.exit(1)
  })
