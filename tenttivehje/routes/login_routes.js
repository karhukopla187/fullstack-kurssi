const express = require("express");
const router = express.Router();
const loginController = require("../controllers/login_ctrl")

router.get('/register', loginController.registerView);
router.get('/login', loginController.loginView);

router.post("/login", loginController.loginPost)
router.post("/register", loginController.registerPost)

module.exports = router