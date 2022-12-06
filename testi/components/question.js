import React, { useReducer, useEffect, useState } from "react"
import ReactDOM from "react-dom"
import Answer from './answer'


const Question = (props) => {

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