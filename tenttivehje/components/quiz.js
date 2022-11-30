import React, { useState } from "react"
import ReactDOM from "react-dom"
const quizController = require ('../controllers/quiz_ctrl')
const quesController = require ('../controllers/question_ctrl')

const Quiz = () => {


    const [appD, dispatch] = useReducer(reducer, appData);

    function reducer(state, action) {
        switch (action.type) {


            case 'QUIZ_NAME_CHANGED': {
                console.log("kyselyn nimi muutettu", action)
                const stateCopy = { ...state, save: true }
                stateCopy.quizzes[action.payload.quizCollectionIndex].name = action.payload.name
                //quizController.quizPut(stateCopy.)
                return stateCopy
            }

            case 'ADD_QUESTION': {
                console.log("kysymys lisätty", action)
                const stateCopy = { ...state }
                stateCopy.quizzes[action.payload.quizCollectionIndex].quizList[action.payload.quizIndex].questions.push({
                    q: "uusi kysymys", a: ["uv1", "uv2", "uv3"]
                })
                return stateCopy
            }

            case 'DELETE_QUESTION': {
                //quesController.
            }
        }

        return (
            <div>
              <div> {props.quiz.name} </div>
        
              <input type="text" onChange={(event)=>
              {props.dispatch({type:"QUIZ_NAME_CHANGED",
                payload:{
                  name:event.target.value,
                  questionIndex:props.questionIndex,
                  quizCollectionIndex:props.quizCollectionIndex,
                  quizIndex:props.quizIndex}
                })}}  
                value = {props.quiz.name}/>
        
              <div> {props.quiz.questions.map((question,index) => <Question dispatch={props.dispatch}
                  quizCollectionIndex={props.quizCollectionIndex} 
                  questionIndex={index} 
                  quizIndex={props.quizIndex} 
                  question={question}/> )} </div>
              <button onClick={()=>props.dispatch({type:"ADD_QUESTION", 
                payload:{quizIndex:props.quizIndex,quizCollectionIndex:props.quizCollectionIndex}})}>Lisää kysymys</button>
            </div>
          )
    }
}

export default Quiz