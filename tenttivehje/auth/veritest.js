const bodyparser = require('body-parser')
const fs = require('fs');
const express = require('express')  
const cors = require('cors');
const { Pool } = require('pg');
const app = express()
const port = 8080
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const db = require('./db_ops')

//const myPlaintextPassword = 'kissa';
 
 
app.use(express.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
})


app.use(cors())
app.use(express.json());
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())


// Handling post request
app.post("/signup", async (req, res, next) => {
  const { username, password } = req.body;
  let result;
  try {
    let hashed = await bcrypt.hash(password, saltRounds)
    result = db.signUp(username, hashed)
  } catch (error){
    return next(error);
  }
  let token;
  try {
    token = jwt.sign(
      { userId: result.rows[0].id, username: username },
      "secretkeyappearshere",
      { expiresIn: "1h" }
    );
  } catch (err) {
    const error = new Error("Error! Something went wrong.");
    return next(error);
  }
  res.status(201).json({
      success: true,
      data: { userId: result.rows[0].id,
        username: username, token: token },
    });
});
 




app.post("/login", async (req, res, next) => {
  let { username, password } = req.body;
  let existingUser;
  let passwordMatch=false;
  try {
    let result = db.login(username)
    existingUser = {password:result.rows[0].password,username:result.rows[0].username, id:result.rows[0].id};
    passwordMatch = await bcrypt.compare(password, existingUser.password)
  } catch {
    const error = new Error("Error! Something went wrong.");
    return next(error);
  }
  if (!existingUser || !passwordMatch) {
    const error = Error("väärä tunnus tai salasana");
    return next(error);
  }
  let token;
  try {
    //Creating jwt token
    token = jwt.sign(
      { userId: existingUser.id, username: existingUser.username },
      "secretkeyappearshere",    //dotenv! -> tätä hyvä käyttää!! 
      { expiresIn: "1h" }
    );
  } catch (err) {
    console.log(err);
    const error = new Error("Error! Something went wrong.");
    return next(error);
  }
  res.status(200).json({
      success: true,
      data: {
        userId: existingUser.id,
        email: existingUser.username,
        token: token,
      },
    });
});



const verifyToken = (req, res, next) =>{

  const token = req.headers.authorization?.split(' ')[1]; 
  //Authorization: 'Bearer TOKEN'
  if(!token)
  {
      res.status(200).json({success:false, message: "Error!Token was not provided."});
  }
  //Decoding the token
  const decodedToken = jwt.verify(token,"secretkeyappearshere" );
  req.decoded = decodedToken
  next() 
} 

app.use(verifyToken)

app.get('/', (req, res) => {
  console.log(req.decoded)
  //SELECT 
  console.log("Palvelimeen tultiin kyselemään dataa")
 res.send("Nyt ollaan palvelussa, joka edellyttää kirjautumisen")
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })