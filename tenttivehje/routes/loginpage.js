const express = require("express");
const router = express.Router();
const loginController = require("../controllers/login_ctrl")

router.post("/login", loginController.loginPost)

router.post("/signup", loginController.signUpPost)

module.exports = router