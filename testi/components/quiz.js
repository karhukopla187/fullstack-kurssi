import './App.css';
import Question from './question';
const db = require("../server/db")


function reducer(state, action) {
    switch (action.type) {
  
        case 'ADD_QUIZ': {
            console.log("lisättiin uusi tentti")
            
        }
      case 'QUIZ_NAME_CHANGED': {
        console.log("muutettiin tentin nimi", action)
        const stateCopy = { ...state }
        stateCopy.[action.payload.index].name = action.payload.name
        return stateCopy
      }
      case 'QUESTION__EDITED': {
        console.log("muutettiin kysymys", action)
        const stateCopy = { ...state }
        stateCopy.[action.payload.index].name = action.payload.name
        return stateCopy
      }
      case 'QUESTION_ADDED': {
        console.log("lisättiin kysymys", action)
        const stateCopy = { ...state }
        stateCopy.[action.payload.index].name = action.payload.name
        return stateCopy
      }
      case 'QUESTION_DELETED': {
        console.log("poistettiin kysymys", action)
        const stateCopy = { ...state }
        stateCopy.[action.payload.index].name = action.payload.name
        return stateCopy
      }

      default:
      throw new Error("reducerissa meni jotain pieleen");
    }
}

const Quiz = (props) => {
  return (
    <div>
      <div> {props.quiz.name} </div>

      <input type="text" onChange={(event)=>
      {props.dispatch({type:"QUIZ_NAME_CHANGED",
        payload:{
          name:event.target.value,
          quizIndex:props.quizIndex}
        })}}  
        value = {props.quiz.name}/>

      <div> {props.quiz.questions.map((question,index) => <Question dispatch={props.dispatch}
          questionIndex={index} 
          quizIndex={props.quizIndex} 
          question={question}/> )} </div>
      <button onClick={()=>props.dispatch({type:"ADD_QUESTION", 
        payload:{quizIndex:props.quizIndex}})}>Lisää kysymys</button>
    </div>
  );
}

export default Quiz
