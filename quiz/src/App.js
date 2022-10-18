import './App.css';
import Question from './Question';
import Quiz from './Quiz'
import { useState,useReducer } from "react"


let option11 = {option:"a"}
let option12 = {option:"b"}
let option13 = {option:"c"}
let option21 = {option:"d"}
let option22 = {option:"e"}
let option23 = {option:"f"}
let option31 = {option:"g"}
let option32 = {option:"h"}
let option33 = {option:"i"}
let option41 = {option:"j"}
let option42 = {option:"k"}
let option43 = {option:"l"}

let q1 = {question:"a?",
            options:[option11,option12,option13]}

let q2 = {question:"b?",
            options:[option21,option22,option23]}

let q3 = {question:"c?",
            options:[option31,option32,option33]}

let q4 = {question:"d?",
            options:[option41,option42,option43]}

let quiz1 = {name:"Quiz 1",
              questions:[q1,q2]}

let quiz2 = {name:"Quiz 2",
              questions:[q3,q4]}

let quizzes = [quiz1,quiz2]

function reducer(state,action) {
  switch (action.type) {
    
    case 'OPTION_CHANGED':
      let option = action.payload.option
      let quizCopy = {...state}
      quizCopy.questions[action.payload.questionIndex].options[action.payload.optionIndex].option = option      
      return quizCopy
    
    case 'QUIZ_NAME_CHANGED':
      console.log("testi haloo", action)
      return {...state, name: action.payload.name};
    
    default:
      throw new Error("err");
  }
  
}


function App() {

  const[quizNum,setQuiz] = useState(0)
  const [quiz, dispatch] = useReducer(reducer, quiz1);

  return (
    <div className="App">
      <div className="header">
        <button onClick = {()=>setQuiz(0)}>{quiz1.name}</button>
        <button onClick = {()=>setQuiz(1)}>{quiz2.name}</button>
      </div>
      <div>
        
        <Quiz quiz = {quizzes[quizNum]} dispatch={dispatch}/>

      </div>
    </div>
  );
}

export default App;
