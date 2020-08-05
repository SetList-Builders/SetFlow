const mongoose = require("mongoose")
const db = require ("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/setflow"
)

function seedUser(){
    const userSeed = [
        {
            username: "User1",
            token: ""
        }
    ]
    
    db.User
      .deleteMany({})
      .then(() => db.User.create(userSeed)
      .then(data => {
          console.log("records inserted!")
      })
      .catch(err => {
          console.log(err)
          process.exit(1)
      }))
}

module.exports = {seedUser}

