const { Pool } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 3211,
    //port: 5432
})

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
        console.log("haettiin tulos")
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
exports.addResult = async (id) => {
    try {
        let res = await pool.query('INSERT INTO result ')
    } catch (error){
        console.log("err",error)
    }
}