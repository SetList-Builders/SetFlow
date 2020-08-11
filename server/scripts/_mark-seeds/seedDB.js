// //**
// * since we can't find an official seeding documentation for mongo
// * This is an approximation of a sequential operation using async / await to ensure different models are created before we can
// * establish the document associations
// * so far unable to find in documentation where it will be easier to create the associations two ways
// * meaning without having to force add associations at two separate points - original document creation and then assoicated document update
// * ex: when creating the setlits - they already point to the user document objects
// * but the user documents still miss the setlists
// * so needed to manually update (see updateUserAssociations)
// *//

const mongoose = require("mongoose");
// imports create and delete users
const userSeeds = require("./userSeeds");
// imports create and delete setlists
const setlistSeeds = require("./setlistSeeds");
//  imports create and delete gigs
const gigSeeds = require("./gigsSeeds");
//  imports single lyrics function - ¯\_(ツ)_/¯ - that one is for your practice
const lyricsSeed = require("./lyricsSeeds");

//  establish mongo connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/setflow", {
 useNewUrlParser: true,
 useUnifiedTopology: true,
});

async function deleteAllSeeds() {
 // delete all users
 let deletedUsers = await userSeeds.deleteUsers();
 console.log("users deleted:", deletedUsers);
 // delete all setlists
 let deletedSetlists = await setlistSeeds.deleteSetlists();
 console.log("setlists deleted:", deletedSetlists);
 // delete all gigs
 let deletedGigs = await gigSeeds.deleteGigs();
 console.log("gigs deleted:", deletedGigs);

 // left delete all lyrics inside the lyrics seed function
}

async function createAllSeeds() {
 // created users - await the returned promise from the createUsers function imported from the userSeeds
 // we need to update the user associations here after creating all other records
 // to do this in a simpler way need to consult mongoose docs
 let createdUsers = await userSeeds.createUsers();
 console.log("created users:", createdUsers);

 let createdSetlists = await setlistSeeds.createSetlists();
 console.log("created setlists", createdSetlists);

 let createdGigs = await gigSeeds.createGigs();
 console.log("gigs created:", createdGigs);

 // associate the gig back to the setlist - weird that this works while the users needed a separate function - ¯\_(ツ)_/¯
 createdSetlists.forEach((setlist) => {
   let setlistGigs = createdGigs.filter((gig) => {
     if (gig.setlists.map((s) => s._id).includes(setlist._id)) {
       return true;
     }
     return false;
   });
   setlist.gigs = setlistGigs;
   setlist.save();
 });
 // this deletes and creates new lyrics
 let createdLyrics = await lyricsSeed.findSetlistForLyrics();
 console.log("created lyrics:", createdLyrics);

 let updatedUsers = await updateUserAssociations(
   createdUsers,
   createdGigs,
   createdSetlists
 );

 // resolve multiple promises - this is important so we are sure the user records are all updated before script terminates
 let resolvedUpdateUsers = await Promise.all(updatedUsers);
 resolvedUpdateUsers.forEach((user) => {
   console.log(`updated user ${user.username}:`, user.toJSON());
 });
}

async function updateUserAssociations(users, gigs, setlists) {
 // loop for each user set its gigs and setlists in the user object then save it
 return users.map((user) => {
   let userSetlists = setlists.filter((setlist) => {
     // mongoose objects have equals method to compare them
     return setlist.user.equals(user);
   });
   let userGigs = gigs.filter((gig) => gig.user.equals(user));
   // update the user setlist and gigs on the mongo document - since for some reason it doesn't update it when the setlist/gig document is created for that user ¯\_(ツ)_/¯
   user.setlists = userSetlists;
   user.gigs = userGigs;
   return user.save();
 });
}

async function run() {
 try {
   await deleteAllSeeds();
   await createAllSeeds();
   process.exit(0);
 } catch (error) {
   console.log(error);
   procecss.exit(1);
 } finally {
   // this is to kill process regardless of unhandled promise rejections that might happen earlier - since the catch will console log such error in most cases -  ¯\_(ツ)_/¯
   process.exit(0);
 }
}

// starts our seeds
run();