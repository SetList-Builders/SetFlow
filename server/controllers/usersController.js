const db = require("../models");

module.exports = {
    findOrCreateUserbyemail:function(req, res){
      let email = req.body.email
        db.User 
          .findOneAndUpdate({username: email}, {username: email}, {upsert: true, new: true})
          .populate("gigs")
          .populate("setlists")
          .then(dbModel => {res.json(dbModel)
            console.log(dbModel)
          })
          .catch(err => res.status(422).json(err))
    },
    findAll: function(req, res) {
        db.User
          .find(req.query)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err))
    },
    findById: function(req, res) {
        db.User
          .findById({ _id: req.params.id})
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
    create: function(req, res) {
        db.User
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.User
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.User
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    }
}