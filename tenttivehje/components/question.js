import React, { useReducer, useEffect, useState } from "react"
import ReactDOM from "react-dom"
import Answer from './answer'
const quizController = require('../controllers/quiz_ctrl')
const quesController = require('../controllers/question_ctrl')


const Question = (props) => {


    const [appD, dispatch] = useReducer(reducer, appData);

    function reducer(state, action) {
        switch (action.type) {

            case 'QUESTION_ADDED': {
                console.log("kysymys lisätty", action)
                const stateCopy = { ...state }
                stateCopy.quizzes[action.payload.quizCollectionIndex].quizList[action.payload.quizIndex].questions.push({
                    q: "uusi kysymys", a: ["uv1", "uv2", "uv3"]
                })
                return stateCopy
            }

            case 'QUESTION_CHANGED': {

            }

            case 'QUESTION_DELETED': {
            }

        }
    }

    return (
        <div className='question'>
            <div> {props.question.q}

                <input type="text" onChange={(event) => {
                    props.dispatch({
                        type: "QUESTION_CHANGED",
                        payload:
                        {
                            q: event.target.value,
                            questionIndex: props.questionIndex,
                            quizCollectionIndex: props.quizCollectionIndex,
                            quizIndex: props.quizIndex
                        }
                    })
                }}
                    value={props.question.q} />

            </div>
            {props.question.a.map(answer =>
                <div> <Answer answer={answer} /> </div>)}
        </div>
    )
}

export default Question