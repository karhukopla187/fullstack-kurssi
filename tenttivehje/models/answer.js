const { Pool } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 3211,
    //port: 5432
})

exports.getAnswer = async (id) => {
    try {
        let res = await pool.query('SELECT * FROM answer WHERE user_id ($1)', id)
        console.log("haettiin kysymys")
    } catch (error) {
        console.log("err", error)
    }
}
