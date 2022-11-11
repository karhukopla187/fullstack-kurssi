
const createError = require("http-errors");
const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");



const login = require("./login.js")
const user = require("./user.js")
const home = require("../routes/home.js")
const result = require("./result.js")
const login = require("./login.js")
const quiz = require("./quiz.js");
const question = require("./question.js")
const answer = require("./answer.js")
const option = require("./option.js")
const catalogRouter = require("./routes/catalog")
const indexRouter = require("./routes/index");

app.use("/", indexRouter);
app.use("/catalog", catalogRouter)

app.use("/login", login)
app.use("/home", home)
app.use("/quiz", quiz);

module.exports = app;