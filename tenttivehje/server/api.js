const bodyparser = require('body-parser')
const fs = require('fs');
const express = require('express')  //Jos ei toimi, niin "npm install express"
const cors = require('cors');
const app = express()
const port = 8080
const router = express.Router();

//db-kyselyt ja conffi db_opsissa
const db = require('./db_ops')

app.use(cors())
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

let quizdata = fs.readFileSync('./quizdata.json', { encoding: 'utf8', flag: 'r' });
let userdata = fs.readFileSync('./userdata.json', { encoding: 'utf8', flag: 'r'})
let resultdata = fs.readFileSync('./resultdata.json', { encoding: 'utf8', flag: 'r'})

app.get('/', (req, res) => {
    res.send(data)
})

app.get('/user'), async (req, res) => {
    res.send(userdata)
}

app.get('/quizzes'), async (req, res, next) => {
    db.getQuizzes().then((quizdata) => {
      res.json(quizdata);
    })
}

app.get('/quizzes/:quizId'), async (req, res, next) => {
    db.getQuiz(req.body.id).then((data) => {
      res.json(data);
    })
}

app.get('/quizzes/:quizId/questions', async (req, res) => {
    db.getQuestions(req.params.quizId).then(data => {
        res.json(data)
    })
})

app.post('/quizzes'), async (req,res) => {
    let quiz = {...req.body}
    db.createQuiz(quiz).then(data => {
        res.status(201).json(data)
    })
}

/*
app.post('/quizzes/:quizId/questions/:questionId/answers:', async (req, res) => {
    console.log("kysymyksen lisäys")
    try {
        res = await pool.query("INSERT INTO question (id, name) VALUES ($1,$2) ", [req.body.id, req.body.name])
        res.send('tallennettiin kysymys')
    }
    catch (e) {
        res.status(500).send(e)
    }
})
*/

app.post('/quizzes/:quizId/questions/:questionId/answers:', async (req, res) => {
    console.log("kysymyksen lisäys")
    db.addQuestion([req.body.text]).then(data => {
        res.json(data)
    })
    res.send('tallennettiin kysymys')
})


app.get('/results', async (req, res) => {
    console.log("haetaan tulokset")
    db.getResults().then(data => {
        res.status(201).json(data)
    })
})

app.get('/results/:resultId', async (req, res) => {
    console.log("haetaan tulos")
    db.getResult(req.params.id).then((data) => {
        res.json(data[0])
    })
})


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})