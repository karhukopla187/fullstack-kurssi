const quiz = require("../models/quiz");
const quizInstance = require("../models/quiz_instance")

const async = require("async");

exports.index = (req, res) => {
    res.send("NOT IMPLEMENTED: Site Home Page");
  };

// Display list of all 
exports.quiz_list = (req, res) => {
    quiz.getQuizzes().then((data) => {
        res.json(data);
  })
}

// Display  create form on GET.
exports.quiz_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Author create GET");
};

// Handle  create on POST.
exports.quiz_create_post = (req, res) => {
    quiz.createQuiz()
};

// Display  delete form on GET.
exports.quiz_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Author delete GET");
};

// Handle  delete on POST.
exports.quiz_delete_post = (req, res) => {
  quiz.deleteQuiz()
};

// Display  update form on GET.
exports.quiz_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Author update GET");
};

// Handle  update on POST.
exports.quiz_update_post = (req, res) => {
  quiz.updateQuiz()
};
