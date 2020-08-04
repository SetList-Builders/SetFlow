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
//token data type currently unknown

const gigSeed = [
    {
        user_id: "",
        gigName: "Gig 1",
        setlistArray: []
    }
]

const setlistSeed = [
    {
       user_id: "",
       setlistName: "Setlist 1",
       songArray: []  
    },
    {
        user_id: "",
        setlistName: "Setlist 2",
        songArray: []
    }
]

const songSeed = [
    {
        setlist_id: "Setlist1_id",
        songInfo: {
            songTitle: "I Will Survive",
            songArtist: "Gloria Gaynor",
            songLyrics: "At first I was afraid, I was petrified.  Kept thinking I could never live without you by my side..."
        }
    },
    {
        setlist_id: "Setlist1_id",
        songInfo: {
            songTitle: "Respect",
            songArtist: "Aretha Franklin",
            songLyrics: "What you want, Baby I got it.  What you need, you know I got it.  All I'm askin' is for a little respect when get home..."
        }
    },
    {
        setlist_id: "Setlist1_id",
        songInfo: {
            songTitle: "Proud Mary",
            songArtist: "Tina Turner",
            songLyrics: "Left a good job in the city, working for the man every night and day.  But I never lost one minute of sleeping worrying about the way things might have been..."
        }
    },
    {
        setlist_id: "Setlist2_id",
        songInfo: {
            songTitle: "Sweet Dreams (Are Made of This",
            songArtist: "Eurythmics",
            songLyrics: "Sweet dreams are made of this, who am I to disagree?  I traveled the world and the seven seas, everybody is looking for something..."
        }
    },
    {
        setlist_id: "Setlist2_id",
        songInfo: {
            songTitle: "Fancy",
            songArtist: "Iggy Azalea",
            songLyrics: "First things first, I'm the realest.  Drop this and let the whole world feel it.  I'm still in the murder business, I can hold you down like I'm givin' lessons in physics.."
        }

    }, 
    {
        setlist_id: "Setlist2_id",
        songInfo: {
            songTitle: "It's Raining Men",
            songArtist: "The Weather Girls",
            songLyrics: "Humidity's rising, barometer's getting low (how low girl), according to all sources (what sources), the street's the place to go.."
        }
    }
]

db.SetFlow
  .remove({})
  .then(() => db.SetFlow.collection.insertMany(userSeed, gigSeed, setlistSeed, songSeed))
  .then(data => {
      console.log("records inserted!")
      process.exit(0)
  })
  .catch(err => {
      console.log(err)
      process.exit(1)
  })



