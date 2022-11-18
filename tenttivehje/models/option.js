const { Pool } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 3211,
    //port: 5432
})

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