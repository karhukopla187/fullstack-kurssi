
const { Pool } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 3211,
    //port: 5432
})


const getQuizzes = async () => {
    let data = 'SELECT * FROM quiz'
    try {
        let res = await pool.query(data)
        console.log("haettiin tentit")
        return res
    } catch (error) {
        console.log("err", error)
    }
    pool.end()
}

const addQuiz = async () => {
    let text = 'INSERT INTO quizzes (name) VALUES ($1)'
    let values = ['Uusi tentti']
    try {
        let res = await pool.query(text, values)
        console.log("lisättiin tentti")
    } catch (error) {
        console.log("err", error)
    }
    pool.end()
}

const deleteQuiz = async () => {

}

const editQuizName = async () => {

}



const getUser = async () => {
    let data = 'SELECT '
    try {
        let res = await pool.query(data)
        console.log("haettiin tentit")
        //return res
    } catch (error) {
        console.log("err", error)
    }
    pool.end()
}

const getQuestion = async () => {
    let data = ''
    try {
        let res = await pool.query(data)
        console.log("haettiin kysymys")
    } catch (error) {
        console.log("err", error)
    }
    pool.end()
}

const addQuestion = async () => {

}

const deleteQuestion = async () => {

}

/*
module.exports = {}
*/

exports.getQuizzes = getQuizzes
exports.addQuiz = addQuiz