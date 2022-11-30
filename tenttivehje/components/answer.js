import React, { useReducer, useEffect, useState } from "react"
import ReactDOM from "react-dom"


const Answer = (props) => {

    const editAnswer = false

    const [appD, dispatch] = useReducer(reducer, appData);

    function showEditor() {

    }

    function reducer(state, action) {
        switch (action.type) {

            case 'ANSWER_ADDED': {

            }

            case 'EDIT_ANSWER': {

            }

            case 'ANSWER_EDITED': {

            }

            case 'ANSWER_DELETED': {

            }

        }
    }

    return (
        <div className='answer'>
            <button value = "editoi" onClick={showEditor()}>Editoi</button>
            <div name ="ans-editor">
                <button value = "poista" onClick={() => props.dispatch({
                    type: "ANSWER_DELETED",
                    payload: { quizIndex: props.quizIndex, quizCollectionIndex: props.quizCollectionIndex }})}>Editoi
                </button>
            </div>
            <input type='checkbox'></input>
            <div> {props.answer} </div>
        </div>
    )
}

export default Answer