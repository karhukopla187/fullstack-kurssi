const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 3211,
})
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})


const add = {
  text: 'INSERT INTO quizzes (name) VALUES ($1)',
  values: ['Uusi tentti'],
}
const remove = {
  text: 'DELETE FROM quizzes WHERE id = ($1)',
  values: [1],
}
const changeName = {
  text: 'UPDATE quizzes SET name = ($2) WHERE id = ($1)',
  values: [1, 'Uusi nimi'],
}
const getAll = {
  text: 'SELECT * FROM quizzes'
}
const getOne = {
  text: 'SELECT * FROM quizzes WHERE id = ($1)',
  values: [1]
}
const getAlphabetically = {  
  text: 'SELECT * FROM quizzes ORDER BY name ASC',
}
const getMultiple = {
  text: 'SELECT * FROM quizzes WHERE id IN ($1, $2, $3)',
  values: [1,2,3]
}
const getByDate = {
  text: 'SELECT * FROM quizzes WHERE date ($1)',
  values: ['12.10.2022']
}
const getActive = {
  text: 'SELECT * FROM quizzes WHERE active ($1)',
  values: [true]
}


const addQuiz = async () => {
  let text = 'INSERT INTO quizzes (name) VALUES ($1)'
  let values = ['Uusi tentti']
  try {
    let res = await pool.query(text,values)
    console.log("lisättiin tentti")
  } catch (error) {
    console.log("err",error)
  }
  pool.end()

}

const removeQuiz = async () => {
  try {
    let res = await pool.query(remove)
    console.log("poisto")
  } catch (error) {
    console.log("err",error)
  }
  pool.end()
}

const changeQuizName = async () => {
  try {
    let res = await pool.query(changeName)
    console.log("nimi päivitetty")
  } catch (error) {
    console.log("err",error)
  }
  pool.end()
}

const getQuizzes = async () => {
  try {
    let res = await pool.query(getAll)
    console.log("tentit haettu")
  } catch (error) {
    console.log("err",error)
  }
  pool.end()
}

const getQuizByID = async () => {
  try {
    let res = await pool.query(getOne)
    console.log("spesifi tentti haettu")
  } catch (error) {
    console.log("err",error)
  }
  pool.end()
}

const getQuizzesAlphabetically = async () => {
  try {
    let res = await pool.query(getAll)
    console.log("haettiin tentit")
    res.sort((a,b) => {
      return a.name - b.name
    })
    console.log(res)
  } catch (error) {
    console.log("err",error)
  }
  pool.end()
}

const getQuizzesByIDs = async () => {
  try {
    let res = await pool.query(getMultiple)
    console.log("haettiin tentti")
  } catch (error) {
    console.log("err",error)
  }
  pool.end()
}

const getQuizBeforeDate = async () => {
  try {
    let res = await pool.query(getByDate)
    console.log("haettiin päivämäärää edeltävä tentti")
  } catch (error) {
    console.log("err",error)
  }
  pool.end()
}

const getActiveQuiz = async () => {
  try {
    let res = await pool.query(getActive)
    console.log("haettiin voimassa oleva tentti")
    console.log(res)
  } catch (error) {
    console.log("err",error)
  }
  pool.end()
}

addQuiz()
//removeQuiz()
//changeQuizName()
//getQuizzes()
//getQuizByID()
//getQuizzesAlphabetically()
//getQuizzesByIDs()
//getQuizBeforeDate()
//getActiveQuiz()