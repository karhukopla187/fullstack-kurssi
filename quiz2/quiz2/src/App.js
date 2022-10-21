import './App.css';
import Quiz from './Quiz';
import QuizCollection from './QuizCollection';
import { useState, useReducer, useEffect } from "react"

const App=()=> {

const[quizID,setQuiz] = useState(0)

let question1 = { q:"Kysymys 1",a:["vastaus 1","vastaus 2","vastaus 3"] }
let question2 = { q:"Kysymys 2",a:["vastaus 4","vastaus 5","vastaus 6"] }
let question3 = { q:"Kysymys 3",a:["vastaus 7","vastaus 8","vastaus 9"] }
let question4 = { q:"Kysymys 4",a:["vastaus 10","vastaus 11","vastaus 12"] }

let quiz1 = {
  name: "Kysely 1",
  questionsAmount: 2,
  questions: [question1, question2]
}

let quiz2 = {
  name: "Kysely 2",
  questionsAmount: 2,
  questions: [question3, question4]
}

let appData = {
  quizzes: [{quizList: [quiz1, quiz2]}],
  save: false,
  dataInitialized: false
}

//let quizzes = { quizList: [quiz1, quiz2] }


function reducer(state, action) {
  switch (action.type) {

    case 'QC_NAME_CHANGED': {
      console.log("kyselylistan nimi muutettu", action)
      const stateCopy = {...state, save: true}
      stateCopy.quizzes[action.payload.index].name = action.payload.name
      return stateCopy
    }

    case 'QUIZ_NAME_CHANGED': {
      console.log("kyselyn nimi muutettu", action)
      const stateCopy = {...state, save: true}
      stateCopy.quizzes[action.payload.quizCollectionIndex].name = action.payload.name
      return stateCopy
    }

    case 'QUESTION_CHANGED':
      console.log("kysymys muutettu", action)
      const stateCopy = {...state, save: true}
      stateCopy.quizzes[action.payload.quizCollectionIndex]
      .quizList[action.payload.quizIndex]
      .questions[action.payload.questionIndex].q
       = action.payload.q
      return stateCopy

    case 'ADD_QUESTION': {
      console.log("kysymys lisätty", action)
      const copy = { ...state }
      copy.quizzes[action.payload.quizCollectionIndex].quizList[action.payload.quizIndex].questions.push({ q:"uusi kysymys",a:["uv1","uv2","uv3"] })
      return copy
    }

    case 'ADD_QUIZ_COLLECTION': {
      console.log("qc lisätty", action)
      return { ...state, quizzes: [...state.quizzes, { name: "default", quizList: [] }], save: true }
    }
    
    case 'UPDATE':
      return {...state,save:action.payload}

    case 'INITIALIZE':
      return {...action.payload,dataInitialized:true}


    default:
      throw new Error("homma kusi");
  }
}

const [appD, dispatch] = useReducer(reducer, appData);

useEffect(() => {
  let quizdata = localStorage.getItem('quizdata');
  if (quizdata == null) {
    console.log("Data luettiin vakiosta")
    localStorage.setItem('quizdata', JSON.stringify(appData));
    dispatch({ type: "INITIALIZE", payload: appData })

  } else {
    console.log("Data luettiin local storagesta")

    dispatch({ type: "INITIALIZE", payload: (JSON.parse(quizdata)) })
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
        <button className='switch' onClick={()=>setQuiz(0)}>{quiz1.name} </button>
        <button className='switch' onClick={()=>setQuiz(1)}>{quiz2.name} </button>
      </div>
      <div className='body'>

        {appD.dataInitialized && appD.quizzes.map((quizCollection, index) => 
          <QuizCollection quizCollectionIndex={index} quizCollection={quizCollection} dispatch={dispatch} />)}
        <button onClick={() => dispatch({ type: 'ADD_QUIZ_COLLECTION' })}>Lisää uusi kyselylista</button>

      </div>
    </div>
  );
}

export default App;