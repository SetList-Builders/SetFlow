const db = require("../models");

// Defining methods for the setlistsController
module.exports = {
  findAll: function(req, res) {
    db.Setlist
      .find(req.query)
    //   .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Setlist
      .findById({ _id: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUser: function(req, res) {
    db.Setlist
      .findByUser({user: req.params.user})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findByGig: function(req, res) {
    db.Setlist
      .find({ gigs: req.params.key})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  // create: function(req, res) {
  //   db.Setlist
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  create: async function (req, res){
    const user = await db.User.findOne({username: req.body.user})
    const setlist = { name: req.body.name, user: user }
    try {
      const createSetlist = await db.Setlist.create(setlist)
      user.setlists.push(createSetlist)
      await user.save()
      res.json(createSetlist)
    } catch (error){
      res.status(422).json(error);
    }
  },
  update: function(req, res) {
    db.Setlist
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Setlist
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
