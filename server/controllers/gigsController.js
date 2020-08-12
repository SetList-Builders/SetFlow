const db = require("../models");

// Defining methods for the gigsController
module.exports = {
  findAll: function (req, res) {
    db.Gig
      .find(req.query)
      //   .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Gig
      .findById(req.params.id)
      .populate("setlists")
      .populate("user")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUser: function (req, res) {
    db.Gig
      .findByUser({ user: req.params.user })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  create: async function (req, res) {
    // console.log("create Controller:", req.body)
    const user = await db.User.findOne({username: req.body.user})
    const gig = { name: req.body.name, user: user }
    try {
      const createGig = await db.Gig.create(gig)
      user.gigs.push(createGig)
      await user.save()
      res.json(createGig)
    } catch (error){
      res.status(422).json(error);
    }
  },
  update: function (req, res) {
    db.Gig
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Gig
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
