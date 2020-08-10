const db = require("../models");

async function createSetlists() {
  // find all users (from user seed)
  let users = await db.User.find({});
  // map the arrray of user model objects and for each create two setlist objects
  const setlistSeeds = users.map((user) => {
    return [
      {
        name: `Setlist #1 for ${user.username}`,
        user: user,
      },
      {
        name: `Setlist #2 for ${user.username}`,
        user: user,
      },
    ];
  });
  // need to make the above array flat
  // example: [[1],[2]], flattened: [1,2]
  let flattenedSetLists = setlistSeeds.flatMap((seed) => seed);
  // returns the create promise
  return db.Setlist.create(flattenedSetLists);
}

async function deleteSetlists() {
  // returns the delete promise
  return db.Setlist.deleteMany();
}

module.exports = {
  createSetlists,
  deleteSetlists,
};
