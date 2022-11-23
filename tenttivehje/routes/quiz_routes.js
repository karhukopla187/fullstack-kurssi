const express = require("express");
const router = express.Router();
const quizController = require("../controllers/quiz_ctrl")

router.get('/:userid/quizzes', quizController.quizzesGet);
router.get('/:userid/quiz', quizController.quizGet);
router.post('/quizzes', quizController.quizCreate)
router.put('/quizzes/:id', quizController.quizPut)
router.delete('quizzes/:id', quizController.quizDelete)