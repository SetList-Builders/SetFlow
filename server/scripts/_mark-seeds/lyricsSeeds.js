const db = require("../../models");

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
      user: 'zjhassler@gmail.com'
    },
    {
      setlists: setlists,
      songName: "Respect",
      lyrics:
        "What you want, Baby I got it.  What you need, you know I got it.  All I'm askin' is for a little respect when get home...",
      user: 'zjhassler@gmail.com'
    },
    {
      setlists: setlists,
      songName: "I Will Survive",
      lyrics:
        "At first I was afraid, I was petrified.  Kept thinking I could never live without you by my side...",
      user: 'mezamic000@gmail.com'
    },
    {
      setlists: setlists,
      songName: "Respect",
      lyrics:
        "What you want, Baby I got it.  What you need, you know I got it.  All I'm askin' is for a little respect when get home...",
      user: 'mezamic000@gmail.com'
    },
    {
      setlists: setlists,
      songName: "I Will Survive",
      lyrics:
        "At first I was afraid, I was petrified.  Kept thinking I could never live without you by my side...",
      user: 'melaniejindali@icloud.com'
    },
    {
      setlists: setlists,
      songName: "Respect",
      lyrics:
        "What you want, Baby I got it.  What you need, you know I got it.  All I'm askin' is for a little respect when get home...",
      user: 'melaniejindali@icloud.com'
    },
    {
      setlists: setlists,
      songName: "I Will Survive",
      lyrics:
        "At first I was afraid, I was petrified.  Kept thinking I could never live without you by my side...",
      user: 'tashona.smith@gmail.com'
    },
    {
      setlists: setlists,
      songName: "Respect",
      lyrics:
        "What you want, Baby I got it.  What you need, you know I got it.  All I'm askin' is for a little respect when get home...",
      user: 'tashona.smith@gmail.com'
    },
  ];
  let deletedLyrics = await db.Lyrics.deleteMany({});
  // console.log("deleted lyrics", deletedLyrics);
  return db.Lyrics.create(songSeed);
}

module.exports = { findSetlistForLyrics };