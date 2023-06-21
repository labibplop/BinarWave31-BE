const PlayerController = require("../Controllers/Player.controller")
const Router = require("express").Router()

Router.use("/", PlayerController.GetUser)

module.exports = Router ;