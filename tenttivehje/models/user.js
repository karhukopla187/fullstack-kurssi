const { Pool } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 3211,
    //port: 5432
})

exports.getUser = async (id) => {
    try {
        let res = await pool.query('SELECT FROM user WHERE id ($1)', id)
        console.log("haettiin käyttäjä")
        return res
    } catch (error) {
        console.log("err", error)
    }
}