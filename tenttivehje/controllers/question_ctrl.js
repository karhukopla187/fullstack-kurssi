const bodyparser = require('body-parser')
const fs = require('fs');
const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000
const router = express.Router();

const db = require("../models/question")

app.use(cors())
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

exports.questionsGet = (async (req, res, next) => {
    let data = db.getQuestions(req)
    res.json(data);
    res.status(200)
  })

exports.questionCreate = (async (req, res) => {
    let data = { ...req.body }
    db.addQuestion(data)
    res.status(201).json(data)
  })
  
  exports.questionPut = (async (req, res) => {
    db.updateQuestion(req.body.id)
    res.status(201)
  })
  
  exports.questionDelete = (async (req, res) => {
    db.deleteQuestion(req.body.id)
    res.status(200)
  })