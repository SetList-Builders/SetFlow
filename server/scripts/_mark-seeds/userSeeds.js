const db = require("../models");

// emails to seed users
// zjhassler@gmail.com
// mezamic000@gmail.com
// melaniejindali@icloud.com
// tashona.smith@gmail.com

// an asynchronous function that returns created users as a promise
async function createUsers() {
  // local users array of objects
  const users = [
    {
      username: "zjhassler@gmail.com",
    },
    {
      username: "mezamic000@gmail.com",
    },
    {
      username: "melaniejindali@icloud.com",
    },
    {
      username: "tashona.smith@gmail.com",
    },
  ];
  // returns the db promise from create
  // no need for .then in this case
  return db.User.create(users);
}

async function deleteUsers() {
  // returns the deleteMany promise
  return db.User.deleteMany();
}

// export user seed async functions
module.exports = {
  createUsers,
  deleteUsers,
};
