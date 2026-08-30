const express =  require('express')
const router  = express.Router()
const UserController = require("../controller/user.controller")
const upload = require("../config/multer.config")


router.post("/create",upload.single("profile"), UserController.create)


module.exports = router