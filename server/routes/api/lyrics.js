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

module.exports = router