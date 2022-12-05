import './App.css';
import Quiz from './quiz_instancef';
import QuizCollection from './quizf';
import { useState, useReducer, useEffect } from "react"
import User from '../views/user_view';

const axios = require('axios');
const express = require('express');
const app = express();
const port = 3000

/*
app.set('view engine', 'ejs');
//Routes
app.use('/', require('./routes/login_routes'));


app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
*/

const App = () => {



  const [quizID, setQuiz] = useState(0)

  const [appD, dispatch] = useReducer(reducer, appData);


  async function getUser() {
    try {
      const response = await axios.get('/user', {
        params: {
          ID: user.id
        }

      }),
    } catch (error) {
      console.error(error)
    }
  }



  function reducer(state, action) {
    switch (action.type) {

      case 'QC_NAME_CHANGED': {
        console.log("kyselylistan nimi muutettu", action)
        const stateCopy = { ...state, save: true }
        stateCopy.quizzes[action.payload.index].name = action.payload.name
        return stateCopy
      }

      case 'QUIZ_NAME_CHANGED': {
        console.log("kyselyn nimi muutettu", action)
        const stateCopy = { ...state, save: true }
        stateCopy.quizzes[action.payload.quizCollectionIndex].name = action.payload.name
        return stateCopy
      }

      case 'QUESTION_CHANGED':
        console.log("kysymys muutettu", action)
        const stateCopy = { ...state, save: true }
        stateCopy.quizzes[action.payload.quizCollectionIndex]
          .quizList[action.payload.quizIndex]
          .questions[action.payload.questionIndex].q
          = action.payload.q
        return stateCopy

      case 'ADD_QUESTION': {
        console.log("kysymys lisätty", action)
        const stateCopy = { ...state }
        stateCopy.quizzes[action.payload.quizCollectionIndex].quizList[action.payload.quizIndex].questions.push({ 
          q: "uusi kysymys", a: ["uv1", "uv2", "uv3"] })
        return stateCopy
      }

      case 'ADD_QUIZ_COLLECTION': {
        console.log("qc lisätty", action)
        return { ...state, quizzes: [...state.quizzes, { name: "default", quizList: [] }], save: true }
      }

      case 'UPDATE':
        return { ...state, save: action.payload }

      case 'INITIALIZE':
        return { ...action.payload, dataInitialized: true }


      default:
        throw new Error("homma kusi");
    }
  }
  
  useEffect(() => {
    const quizData = localStorage.getItem('quizdata');
    if (quizData == null) {
      console.log("Data luettiin vakiosta")
      localStorage.setItem('quizdata', JSON.stringify(appData));
      dispatch({ type: "INITIALIZE", payload: appData })

    } else {
      console.log("Data luettiin local storagesta")

      dispatch({ type: "INITIALIZE", payload: (JSON.parse(quizData)) })
    }

  }, []);


  useEffect(() => {

    if (appD.save === true) {
      console.log(" nimi pitää tallentaa")
      console.log("appdata:", appD)

      localStorage.setItem('quizdata', JSON.stringify(appD));
      dispatch({ type: "UPDATE", payload: false })
    }
  }, [appD.save]);

return (
  <div>
    <div className='header'>
    <div className='login'>
        <p>Syötä käyttäjätunnus ja salasana kirjautuaksesi sisään</p>
        <label for="username">Tunnus:</label>
        <input type="text" id="username" onChange={(event)=>
        
        }
        />
        <p>Ei käyttäjätunnusta? Rekisteröidy:</p>
        <button onClick={() => dispatch

        
    </div>
    </div>
  </div>
)



export default App

/*
  return (
    <div>
      <div className='header'>
        <button className='switch' onClick={() => setQuiz(0)}>{quiz1.name} </button>
        <button className='switch' onClick={() => setQuiz(1)}>{quiz2.name} </button>
      </div>
      <div className='body'>

        {appD.dataInitialized && appD.quizzes.map((quizCollection, index) =>
          <QuizCollection quizCollectionIndex={index} quizCollection={quizCollection} dispatch={dispatch} />)}
        <button onClick={() => dispatch({ type: 'ADD_QUIZ_COLLECTION' })}>Lisää uusi kyselylista</button>

      </div>
    </div>
  );
}*/
