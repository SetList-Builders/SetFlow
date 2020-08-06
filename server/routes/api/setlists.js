const router = require("express").Router()
const setlistsController = require("../../controllers/setlistsController")
const { get } = require("mongoose")

//Matches with "/api/setlists"
router.route("/")
    .get(setlistsController.findAll)
    .post(setlistsController.create)

//Matches with "/api/setlists/:id"
router.route("/:id")
    .get(setlistsController.findById)
    .delete(setlistsController.remove)
    .put(setlistsController.update)

//Matches with "/api/setlists/:gigId"
router.route("/:gigId")
  .get(setlistsController.findByGig)

//Matches with "/api/setlists/:user"
router.route("/:user")
  .get(setlistsController.findByUser)
  
module.exports = router