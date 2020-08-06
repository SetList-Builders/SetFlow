const mongoose = require("mongoose")
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/setflow"
)
async function findSetlistForLyrics(){
    const setlists = await db.Setlist.find({})
    console.log(setlists)
    const songSeed = [
        { 
            setlists: setlists,
            songName: "I Will Survive",
            lyrics: "At first I was afraid, I was petrified.  Kept thinking I could never live without you by my side..."
        },
        {
            setlists: setlists,
            songName: "Respect",
            lyrics: "What you want, Baby I got it.  What you need, you know I got it.  All I'm askin' is for a little respect when get home..."
        }
    ]
    db.Lyrics
    .deleteMany({})
    .then(() => db.Lyrics.create(songSeed)
    .then(data => {
        console.log(data)
        console.log("records inserted!")
      })
      .catch(err => {
        console.log(err)
        process.exit(1)
    }))
  }

  findSetlistForLyrics()
  
  //module.exports = {findSetlistForLyrics}
  findSetlistForLyrics()
