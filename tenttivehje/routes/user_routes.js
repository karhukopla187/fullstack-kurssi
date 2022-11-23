const express = require("express");
const router = express.Router();
const userController = require("../controllers/user_ctrl")

router.get("/user/:userid", userController.userGet)