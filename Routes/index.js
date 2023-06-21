const router = require("express").Router();
const PlayerRouter = require("./player")

router.use("/players", PlayerRouter)

module.exports = router