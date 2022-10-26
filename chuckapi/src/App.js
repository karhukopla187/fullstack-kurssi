import './App.css';
import { useState, useReducer, useEffect } from "react"
import axios from 'axios'

//const jokes = []

let appState = {
  joke: "",
  jokes: [],
  fetching: false,
  fetchFailed: false,
  save: false,
  dataInitialized: false
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

//vitsin automaattihaku
function fetch() {
  dispatch({type:'FETCH'})
  dispatch({type:'FETCHED'})
}

function fetchJoke() {
  setInterval(fetch,10000)
}

function App() {

  const [appData, dispatch] = useReducer(reducer, appState)

//localstorage viritelmä
  useEffect(() => {
    const jokeData = localStorage.getItem('data');
    if ( jokeData== null) {
      console.log("storagessa ei mitään")
      localStorage.setItem('data', JSON.stringify(appState));
      dispatch({ type: "INITIALIZE", payload: appState })
    } else {
      console.log("local storage")
      dispatch({ type: "INITIALIZE", payload: (JSON.parse(jokeData)) })
    }
  }, []);

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

  return (
    <div>
      <button onClick={() => dispatch({ type: 'FETCH' })}>Hae uusi vitsi</button>
      <div>{appData.joke.toString()}
      <div>{fetchJoke()}</div>

      </div>
    </div>
  )
}

export default App


