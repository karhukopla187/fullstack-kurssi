const { Pool } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 3211,
    //port: 5432
})

exports.signUp = async (username, hashed) => {
    try {
        let res = await pool.query("INSERT INTO users (username, password) VALUES ($1,$2) RETURNING id",[username, hashed])
        return res
    } catch (error) {
        console.log("err",error)
    }
}

exports.login = async (username) => {
    try {
        let res = await pool.query ("SELECT * FROM users WHERE username ($1)",[username])
        return res
    } catch (error) {
        console.log("err",error)
    }
}