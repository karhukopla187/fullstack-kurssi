import './styles.css';
import { useState, useReducer, useEffect } from "react"
import axios from 'axios'
//const db = require("../server/db")
import db from '../server/db'

const App = () => {
  const [data, setData] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const userData = {
      email: data.email,
      password: data.password
    }
    axios
      .post("https://localhost:3000/user", userData)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response)
          console.log("server responded")
        } else if (error.request) {
          console.log("network error")
        } else {
          console.log(error)
        }
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Tunnus
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Salasana
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Kirjaudu</button>
      </form>
    </div>
  )
}

export default App