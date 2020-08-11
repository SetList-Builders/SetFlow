const db = require("../models");

// Defining methods for the lyricsController
module.exports = {
  getLyrics: function(req, res) {
    // res.send("I'm here!")
    console.log("Get Lyrics: ", req.body)
    const {artist, title} = req.body
    axios.get("https://orion.apiseeds.com/api/music/lyric/" + artist + "/" + song + "?apikey=" + )
  },
  findAll: function(req, res) {
    db.Lyrics
      .find(req.query)
    //   .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Lyrics
      .findById({ _id: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findBySetlist: function(req, res) {
    db.Lyrics
      .find({ setlists: req.params.setlistId })
      .populate("songs")
      .populate("user")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  create: function(req, res) {
    db.Lyrics
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Lyrics
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Lyrics
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
