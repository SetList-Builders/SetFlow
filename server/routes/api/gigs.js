const router = require("express").Router()
const gigsController = require("../../controllers/gigsController")

//Matches with "/api/gigs"
router.route("/")
    .get(gigsController.findAll)
    .post(gigsController.create)

//Matches with "/api/gigs/:id"
router.route("/:id")
    .get(gigsController.findById)
    .delete(gigsController.remove)
    .put(gigsController.update)

//Matches with "/api/gigs/:user"
router.route("/:user")
  .get(gigsController.findByUser)
module.exports = router