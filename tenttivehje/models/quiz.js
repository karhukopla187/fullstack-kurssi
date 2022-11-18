const { Pool } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 3211,
    //port: 5432
})

exports.getQuizzes = async () => {
    try {
        let res = await pool.query('SELECT * FROM quiz')
        console.log("haettiin tentit")
        return res.rows
    } catch (error) {
        console.log("err", error)
    }
}

exports.getQuiz = async (id) => {
    try {
        let res = await pool.query('SELECT FROM quiz WHERE id ($1)', id)
    } catch (error) {
        console.log("err", error)
    }
}

exports.createQuiz = async (id) => {
    try {
        let res = await pool.query('INSERT INTO quiz (name) VALUES ($1) WHERE id ($1)', id)
        console.log("lisättiin tentti")
    } catch (error) {
        console.log("err", error)
    }
}

exports.deleteQuiz = async (id) => {
    try {
        let res = await pool.query('DELETE FROM quiz WHERE id ($1)', id)
        console.log("poistettiin tentti")
    } catch (error) {
        console.log("err", error)
    }
}

exports.updateQuiz = async (values) => {
    try {
        let res = await pool.query('UPDATE quiz SET name ($1) WHERE id ($2)', values)
        console.log("päivitettiin tentti")
    } catch (error) {
        console.log("err", error)
    }
}