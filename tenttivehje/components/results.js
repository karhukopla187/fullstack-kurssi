import React, { useReducer, useEffect, useState } from "react"
import ReactDOM from "react-dom"
const quizController = require ('../controllers/quiz_ctrl')
const quesController = require ('../controllers/question_ctrl')

const Results = (props) => {

    
    const resultData =  await axios.get

    

    const [appD, dispatch] = useReducer(reducer, appData);

    function reducer(state, action) {
        switch (action.type) {
            case 'GET_RESULT': {

            }
            case ''

        }

        return (
            <div>
              <div>Tenttien tulokset </div>
        
              <div> {results.map((index) => <Result dispatch={props.dispatch}
                  resultIndex={props.resultIndex} 
                  questionIndex={index} 
                  quizIndex={props.quizIndex} 
                  question={question}/> )} </div>
              <button onClick={()=>props.dispatch({type:"GET_RESULT", 
                payload:{quizIndex:props.quizIndex,quizCollectionIndex:props.quizCollectionIndex}})}>Lisää kysymys</button>
            </div>
          )
    }
}

export default Results