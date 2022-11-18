const bodyparser = require('body-parser')
const fs = require('fs');
const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000
const router = express.Router();

//db-kyselyt ja conffi db_opsissa
const db = require('./db_ops')

app.use(cors())
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

//let data = fs.readFileSync('./quizdata.json', { encoding: 'utf8', flag: 'r' });
//let userdata = fs.readFileSync('./userdata.json', { encoding: 'utf8', flag: 'r'})
// resultdata = fs.readFileSync('./resultdata.json', { encoding: 'utf8', flag: 'r'})

app.get('/', (req, res) => {
    res.status(200).send(data)
})


//KIRJAUTUMINEN

router.route('/login'), get(async (req, res) => {
    let data = db.login()
    res.status(200).json(data)
})


//KÄYTTÄJÄ

router.route('/user'), get(async (req, res) => {
    let data = db.getUser()
    res.status(200).json(data)
})


//TENTIT

/*
router.route('/quizzes').get (async (req, res, next) => {
    db.getQuizzes().then((quizdata) => {
      res.json(quizdata);
      res.status(200)
    })
})
*/
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


//TENTTI

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


//KYSYMYKSET

router.route('/quizzes/:quizId/questions').get(async (req, res) => {
    let data = db.getQuestions(req.body.id)
    res.status(200).json(data)
})


router.route('/:questionId/options').get(async (req, res) => {
    let data = db.getAnswers(req.body.id)
    res.status(201).json(data)
})
.post(async (req, res) => {
    console.log("kysymyksen lisäys")
    db.addQuestion(req.body.text).then(data => {
        res.status(201).json(data)
    })
    res.send('tallennettiin kysymys')
})




//RESULTIT

router.route('/results').get(async (req, res) => {
    console.log("haetaan tulokset")
    db.getResults().then(resultdata => {
        res.status(201).json(resultdata)
    })
})

router.route('/results/:resultId').get(async (req, res) => {
    console.log("haetaan tulos")
    db.getResult(req.params.id).then((data) => {
        res.status(200).json(data[0])
    })
})
.delete(async (req, res) => {
        db.deleteResult(req.params.id)
        res.status(200)
})

app.use(router)


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})