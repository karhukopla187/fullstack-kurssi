
const { Pool } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 3211,
    //port: 5432
})


//TENTIT

exports.getQuizzes = async () => {
    try {
        let res = await pool.query('SELECT * FROM quiz')
        console.log("haettiin tentit")
        return res
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




//KÄYTTÄJÄ

exports.getUser = async (id) => {
    try {
        let res = await pool.query('SELECT FROM user WHERE id ($1)', id)
        console.log("haettiin käyttäjä")
        return res
    } catch (error) {
        console.log("err", error)
    }
}



//TULOKSET

exports.getResults = async () => {
    try {
        let res = await pool.query('SELECT * FROM result')
        console.log("haettiin käyttäjän tulokset")
        return res
    } catch (error) {
        console.log("err", error)
    }
}

exports.getResult = async (id) => {
    try {
        let res = await pool.query('SELECT FROM result WHERE id ($1)', id)
        console.log("haettiin tulokset")
        return res
    } catch (error) {
        console.log("err", error)
    }
}

exports.deleteResult = async (id) => {
    try {
        let res = await pool.query('DELETE FROM result WHERE id ($1)', id)
        console.log("poistettiin tulos")
    } catch (error) {
        console.log("err", error)
    }
}



//KYSYMYKSET

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

exports.deleteQuestion = async (id) => {
    try {
        let res = await pool.query('DELETE FROM question WHERE id ($1)', id)
        console.log("poistettiin tentti")
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



//VASTAUSVAIHTOEHDOT

exports.getOptions = async (id) => {
    try {
        let res = await pool.query('SELECT * FROM option WHERE question_id ($1)', id)
        console.log("haettiin kysymys")
    } catch (error) {
        console.log("err", error)
    }
}

exports.addOption = async (values) => {
    try {
        let res = await pool.query('INSERT INTO option (text) VALUES ($1)', values)
        console.log("lisättiin kysymys")
    } catch (error) {
        console.log("err", error)
    }
}

exports.deleteOption = async (id) => {
    try {
        let res = await pool.query('DELETE FROM option WHERE id ($1)', id)
        console.log("poistettiin vastausvaihtoehto")
    } catch (error) {
        console.log("err", error)
    }
}

exports.updateOption = async (values) => {
    try {
        let res = await pool.query('INSERT INTO option (text) VALUES ($1) WHERE question_id ($2)', values)
        console.log("lisättiin tentti")
    } catch (error) {
        console.log("err", error)
    }
}


//VASTAUKSET

exports.getAnswer = async (id) => {
    try {
        let res = await pool.query('SELECT * FROM answer WHERE user_id ($1)', id)
        console.log("haettiin kysymys")
    } catch (error) {
        console.log("err", error)
    }
}



/*
module.exports = {}
*/

