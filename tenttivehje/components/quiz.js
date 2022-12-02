import React, { useReducer, useEffect, useState } from "react"
import ReactDOM from "react-dom"
import Question from './question';
import axios from 'axios'
const quizController = require ('../controllers/quiz_ctrl')
const quesController = require ('../controllers/question_ctrl')

const Quiz = (props) => {

    const quizdata = async () => {
        try
    }

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

            case 'QUIZ_DELETED': {
                quizController.quizDelete()
            }

            case 'QUESTION_ADDED': {
                console.log("kysymys lisätty", action)
                const stateCopy = { ...state }
                stateCopy.quizzes[action.payload.quizCollectionIndex].quizList[action.payload.quizIndex].questions.push({
                    
                })
                return stateCopy
            }

            case 'QUESTION_CHANGED': {
                console.log("kysymys muutettu")
                const stateCopy = {...state}
                stateCopy.quizzes[action.payload.]
            }

            case 'QUESTION_DELETED': {
                console.log("kysymys poistettu")
                //quesController.
            }

        }

        return (
            <div>
              <div> {props.quiz.name} </div>
        
              <input type="text" onChange={(event)=>
              {props.dispatch({type:"QUIZ_NAME_CHANGED",
                payload:{
                  }
                })}}  
                value = {props.quiz.name}/>
        
              <div> {props.quiz.questions.map((question,index) => <Question dispatch={props.dispatch}
                  questionIndex={index} 
                  quizIndex={props.quizIndex} 
                  question={question}/> )} </div>
              <button onClick={()=>props.dispatch({type:"ADD_QUESTION", 
                payload:{quizIndex:props.quizIndex,}})}>Lisää kysymys</button>
            </div>
          )
    }
}

export default Quiz