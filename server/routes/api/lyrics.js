const router = require("express").Router()
const lyricsController = require("../../controllers/lyricsController")

//Matches with "/api/lyrics"
router.route("/")
    .get(lyricsController.findAll)
    .post(lyricsController.create)

//Matches with "/api/lyrics/:id"
router.route("/:id")
    .get(lyricsController.findById)
    .delete(lyricsController.remove)
    .put(lyricsController.update)

//Matches with "api/lyrics/setlists/:setlistId"
router.route("/setlists/:setlistId")
  .get(lyricsController.findBySetlist)

router.route("/get-lyrics")
  .post(lyricsController.getLyrics)

router.route("/save/:saveSong")
  .post(lyricsController.create)

module.exports = router