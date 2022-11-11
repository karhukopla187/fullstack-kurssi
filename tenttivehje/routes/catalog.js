const express = require("express");
const router = express.Router();

const quizController = require("../controllers/quiz_ctrl");
const quizInstanceController = require("../controllers/quiz_instance_ctrl");

// GET catalog home page.
router.get("/", quizController.index);


//QUIZ ROUTES

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get("/quiz/create", quizController.quiz_create_get);

router.post("/quiz/create", quizController.quiz_create_post);
x
router.get("/quiz/:id/delete", quizController.quiz_delete_get);

router.post("/quiz/:id/delete", quizController.quiz_delete_post);

router.get("/quiz/:id/update", quizController.quiz_update_get);

router.post("/quiz/:id/update", quizController.quiz_update_post);

router.get("/quiz/:id", quizController.quiz_detail);

router.get("/quizzes", quizController.quiz_list);




/// QUIZINSTANCE ROUTES

// NOTE This must come before route that displays BookInstance (uses id).
router.get("/quizinstance/create", quizInstanceController.quiz_instance_create_get);
  
router.post("/quizinstance/create", quizInstanceController.quiz_instance_create_post);
  
router.get("/quizinstance/:id/delete", quizInstanceController.quiz_instance_delete_get);
  
router.post("/quizinstance/:id/delete", quizInstanceController.quiz_instance_delete_post);
  
router.get("/quizinstance/:id/update", quizInstanceController.quiz_instance_update_get);
  
router.post("/quizinstance/:id/update", quizInstanceController.quiz_instance_update_post);
  
router.get("/quizinstance/:id", quizInstanceController.quiz_instance_detail);
  
router.get("/quizinstances", quizInstanceController.quiz_instance_list);
  
module.exports = router;