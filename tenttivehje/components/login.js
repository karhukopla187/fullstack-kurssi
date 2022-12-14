import React, { useState } from "react"
import ReactDOM from "react-dom"
import "./login.css"
const db = require("../controllers/login_ctrl")



function Login() {
  
  const [errorMessages, setErrorMessages] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const userInfo = []
  const isAdmin = false

  const login = async () => {

    

    try {
      axios.post("https://localhost:3000/login", {
      email: email,
      password: password
    })
    .then((response) => {
      console.log(response);
    });
  } catch (err) {
    console.log(err)
  }
  }

  const errors = {
    uname: "väärä käyttäjätunnus",
    pass: "väärä salasana"
  }
  var { uname, pass } = document.forms[0];

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    //käyttäjän haku
    const userData = db.find((user) => user.username === uname.value)
    if (userData) {
      if (userData.password !== pass.value) {
        //väärä salasana
        setErrorMessages({ name: "pass", message: errors.pass })
      } else {
        setIsSubmitted(true)
      }
    } else {
      //käyttäjää ei löydy
      setErrorMessages({ name: "uname", message: errors.uname })
    }
  }

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    )

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Käyttäjätunnus </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Salasana </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  )

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Kirjaudu</div>
        {isSubmitted ? <div>Kirjauduttiin sisään</div> : renderForm}
      </div>
    </div>
  )
}

export default Login