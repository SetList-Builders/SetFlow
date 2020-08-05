const router = require("express").Router();
const gigRoutes = require("./gigs");
const setlistRoutes = require("./setlists")
const lyricsRoutes = require("./lyrics")
const userRoutes = require("./users")

// Gig, Setlist, and Lyrics routes
router.use("/gigs", gigRoutes)
router.use("/setlists", setlistRoutes)
router.use("/lyrics", lyricsRoutes)
router.use("/users", userRoutes)

module.exports = router;