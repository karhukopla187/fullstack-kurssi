const bodyparser = require('body-parser')
const fs = require('fs');
const express = require('express')
const cors = require('cors');
const { Pool } = require('pg');
const app = express()
const port = 8080

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 5432,
})


app.use(cors())
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

let data = fs.readFileSync('./quizdata.json', { encoding: 'utf8', flag: 'r' });


app.get('/', (req, res) => {
    res.send(data)
})

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

app.post('/exams/')

app.get('exams', async (req, res) => {
    try {
        result = await pool.query("")
    }
    catch (e) {
        res.status(500).send(e)
    }
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})