const { Pool } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 3211,
    //port: 5432
})

exports.getQuestions = async (quizId) => {
    try {
        let res = await pool.query('SELECT * FROM question WHERE quiz_id ($1)', quizId)
        console.log("haettiin kysymykset")
    } catch (error) {
        console.log("err", error)
    }
}
exports.addQuestion = async (values) => {
    try {
        let res = await pool.query('INSERT INTO question (text) VALUES ($1) WHERE id ($2)', values)
        console.log("lisättiin kysymys")
    } catch (error) {
        console.log("err", error)
    }
}
exports.updateQuestion = async (values) => {
    try {
        let res = await pool.query('INSERT INTO question (text) VALUES ($1) WHERE id ($2)', values)
        console.log("lisättiin tentti")
    } catch (error) {
        console.log("err", error)
    }
}
exports.deleteQuestion = async (id) => {
    try {
        let res = await pool.query('DELETE FROM question WHERE id ($1)', id)
        console.log("poistettiin tentti")
    } catch (error) {
        console.log("err", error)
    }
}