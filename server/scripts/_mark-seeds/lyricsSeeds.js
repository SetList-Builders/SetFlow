const db = require("../models");

//  intentionally left in this format -
// see if  can alter it to behave the same way as the other examples
async function findSetlistForLyrics() {
  const setlists = await db.Setlist.find({});
  const songSeed = [
    {
      setlists: setlists,
      songName: "I Will Survive",
      lyrics:
        "At first I was afraid, I was petrified.  Kept thinking I could never live without you by my side...",
    },
    {
      setlists: setlists,
      songName: "Respect",
      lyrics:
        "What you want, Baby I got it.  What you need, you know I got it.  All I'm askin' is for a little respect when get home...",
    },
  ];
  let deletedLyrics = await db.Lyrics.deleteMany({});
  // console.log("deleted lyrics", deletedLyrics);
  return db.Lyrics.create(songSeed);
}

module.exports = { findSetlistForLyrics };
