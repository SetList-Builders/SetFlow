const router = require("express").Router();
const gigRoutes = require("./gigs");
const setlistRoutes = require("./setlists")
const lyricsRoutes = require("./lyrics")

// Gig, Setlist, and Lyrics routes
router.use("/gigs", gigRoutes)
router.use("/setlists", setlistRoutes)
router.use("/lyrics", lyricsRoutes)

module.exports = router;