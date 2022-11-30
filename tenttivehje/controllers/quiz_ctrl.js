const bodyparser = require('body-parser')
const fs = require('fs');
const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000
const router = express.Router();

const db = require("../models/quiz")
const quizView = require("./views/quiz_view")
const quizzesView = require("./views/quizzes_view")

app.use(cors())
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())





exports.quizzesGet = (async (req, res, next) => {
  let data = db.getQuizzes()
  res.json(data);
  res.status(200)
})

exports.quizCreate = (async (req, res) => {
  let data = { ...req.body }
  db.createQuiz(data)
  res.status(201).json(data)
})

exports.quizGet = (async (req, res) => {
  let data = db.getQuiz(req.body.id)
  res.status(200).json(data);
})

exports.quizPut = (async (req, res) => {
  db.updateQuiz(req.body.id)
  res.status(201)
})

exports.quizDelete = (async (req, res) => {
  db.deleteQuiz(req.body.id)
  res.status(200)
})

/*
router.route('/quizzes').get(async (req, res, next) => {
  let data = db.getQuizzes()
  res.json(data);
  res.status(200)
})
.post(async (req, res) => {
  let data = { ...req.body }
  db.createQuiz(data)
  res.status(201).json(data)
})

router.route('/quizzes/:quizId').get(async (req, res) => {
  let data = db.getQuiz(req.body.id)
  res.status(200).json(data);
})
.put(async (req, res) => {
      db.updateQuiz(req.body.id)
      res.status(201)
})
.delete(async (req, res) => {
      db.deleteQuiz(req.body.id)
      res.status(200)
})
*/