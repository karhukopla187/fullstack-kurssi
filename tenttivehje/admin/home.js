import React, { useState } from "react"
import ReactDOM from "react-dom"

const Home = () => {

    //const db = null


    const [appD, dispatch] = useReducer(reducer, appData);

    function reducer(state, action) {
        switch (action.type) {

            case 'INITIALIZE':
                return { ...action.payload, dataInitialized: true }


            default:
                throw new Error("homma kusi");
        }
    }

    useEffect(() => {
        const quizData = localStorage.getItem('quizdata');
        if (quizData == null) {
            localStorage.setItem('quizdata', JSON.stringify(appData));
            dispatch({ type: "INITIALIZE", payload: appData })

        } else {
            console.log("Data luettiin local storagesta")
            dispatch({ type: "INITIALIZE", payload: (JSON.parse(quizData)) })
        }

    }, []);

    useEffect(() => {
        const resultData = localStorage.getItem('resultdata');
        if (resultData == null) {
            localStorage.setItem('quizdata', JSON.stringify(appData));
            dispatch({ type: "INITIALIZE", payload: appData })

        } else {
            console.log("Data luettiin local storagesta")

            dispatch({ type: "INITIALIZE", payload: (JSON.parse(quizData)) })
        }

    }, []);

    return (
        <div className="app">
            <div className="homescreen">
                <div className="title">Kirjaudu</div>
                {isSubmitted ? <div>Kirjauduttiin sisään</div> : renderForm}
            </div>
        </div>
    )
}


export default Home