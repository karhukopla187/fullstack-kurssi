const bodyparser = require('body-parser')
const fs = require('fs');
const express = require('express')
const cors = require('cors');
//const { Pool } = require('pg');
const app = express()
const port = 8080

//db-kyselyt ja conffi db_opsissa
const db = require('./db_ops')

app.use(cors())
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

let data = fs.readFileSync('./quizdata.json', { encoding: 'utf8', flag: 'r' });

app.get('/', (req, res) => {
    res.send(data)
})

var userRouter = express.Router();
//var adminRouter = express.Router();

/*
router1.get('/user', function (req, res, next) {
    console.log("User Router Working");
    res.end();
});
  
router2.get('/admin', function (req, res, next) {
    console.log("Admin Router Working");
    res.end();
});
*/

userRouter.route('/quizzes').get((req, res, next) => {
    db.getQuizzes().then((data) => {
      res.json(data[0]);
    })
  })

userRouter.route('/quizzes').post((req,res) => {
    let quiz = {...req.body}
    db.addQuiz(quiz).then(data => {
        res.status(201).json(data)
    })
})

//app.use(userRouter)

/*
app.post('/exams/:examId/questions/:questionId/answers:', async (req, res) => {
    const examId = Number(req.params.examId)
    const questionId = Number(req.params.questionId)

    console.log("kysymyksen lisäys")
    try {
        result = await pool.query("INSERT INTO question (id, name) VALUES ($1,$2) ", [req.body.id, req.body.name])
        res.send('tallennettiin kysymys')
    }
    catch (e) {
        res.status(500).send(e)
    }
})
*/

/*
app.get('exams', async (req, res) => {
    try {
        result = await pool.query("")
    }
    catch (e) {
        res.status(500).send(e)
    }
})
*/


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})