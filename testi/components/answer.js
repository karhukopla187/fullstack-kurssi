import React, { useReducer, useEffect, useState } from "react"
import ReactDOM from "react-dom"


const Answer = (props) => {
    return (
        <div className='answer'>
            <button value = "editoi" onClick={showEditor()}>Editoi</button>
            <div name ="ans-editor">
                <button value = "delete" onClick={() => props.dispatch({
                    type: "ANSWER_EDITED",
                    payload: { quizIndex: props.quizIndex }})}>Poista
                </button>
            </div>
            <input type='checkbox'></input>
            <div> {props.answer} </div>
        </div>
    )
}

export default Answer