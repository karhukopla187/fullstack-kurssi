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

