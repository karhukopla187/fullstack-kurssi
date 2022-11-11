const express = require("express");
const router = express.Router();

const quizController = require("../controllers/quiz_controller");

// GET home page.
router.get("/", function (req, res) {
    res.redirect("/catalog");
  });
  