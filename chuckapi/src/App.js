import './App.css';
import { useState, useReducer, useEffect } from "react"
import axios from 'axios'

let appState = {
  joke: "",
  jokes: [],
  fetching: false,
  fetchFailed: false,
  save: false,
  dataInitialized: false,
  timerOn:true
}

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH':
      console.log("haetaan vitsi")
      return { ...state, fetching: true }
    case 'FETCHED':
      console.log("vitsi haettu")
      return { ...state, joke: action.payload }
    case 'FETCH_FAILED':
      console.log("haku epäonnistui")
      return { ...state, fetchFailed: true, fetching: false }
    /*
    case 'UPDATE':
      return {...state,save:action.payload}
    case 'INITIALIZE':
      return {...action.payload,dataInitialized:true}
    */
    default:
      throw new Error("err")
  }
}

const App = () => {

  const [appData, dispatch] = useReducer(reducer, appState)

  useEffect(() => {
    async function getData() {
      try {
        dispatch({ type: 'FETCH' })
        let result = await axios('https://api.chucknorris.io/jokes/random')
        dispatch({ type: 'FETCHED', payload: result.data.value })
        console.log(result.data.value)
      } catch (error) {
        console.log("error", error)
        dispatch({ type: 'FETCH_FAILED' })
      }
    }
    getData()
  }, [])

  useEffect(() => {
      let timer
      if (appData.timerOn) {
        timer = setInterval(async()=>{
          try {
            let result = await axios('https://api.chucknorris.io/jokes/random')
            dispatch({ type: 'FETCHED', payload: result.data.value })
          }
          catch (error) {
            console.log("error")
          }
        },10000)
      }
      return()=>clearTimeout(timer)
    },[appData.timerOn]
  )

  return (
    <div>
      <div>{appData.joke}</div>
    </div>
  )
}

export default App


