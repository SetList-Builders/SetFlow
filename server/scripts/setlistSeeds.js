const mongoose = require("mongoose")
const db = require ("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/setflow"
)
async function findUserForSetlist(){
    const user = await db.User.findOne({username:"mezamic000@gmail.com"})
    const allSetlists = await db.Setlist.find({})
    const allGigs =await db.Gig.find({})

    user.setlists = allSetlists;
    user.gigs = allGigs;
    user.save()
    // const setlistSeed = [
    //     {
    //        user: user,
    //        name: "Setlist 1",
    //     },
    //     {
    //         user: user,
    //         name: "Setlist 2",
    //     }
    // ]
//     db.Setlist
//   .deleteMany({})
//   .then(() => db.Setlist.create(setlistSeed)
//   .then(data => {
//       console.log("setlists records inserted!")
//   })
//   .catch(err => {
//       console.log(err)
//       process.exit(1)
//   }))
}

findUserForSetlist()

//module.exports = {findUserForSetlist}

