import React, { useState } from "react"
import ReactDOM from "react-dom"
import "./register.css"
const db = require("../controllers/login_ctrl")


function Register() {
  
  const [errorMessages, setErrorMessages] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const userInfo = db.loginPost()
  const isAdmin = false

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
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
          <label>Anna käyttäjätunnus </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Anna salasana </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="input-container">
          <label>Anna salasana uudelleen </label>
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
        <div className="title">Rekisteröidy</div>
        {isSubmitted ? <div>Tunnus rekisteröitiin, kirjaudu sisään </div> : renderForm}
      </div>
    </div>
  )
}

export default Register