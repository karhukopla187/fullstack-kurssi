import React, { useState } from "react"
import ReactDOM from "react-dom"
import Quiz from './quiz'
import Results from './results'


const Home = () => {

    const [appD, dispatch] = useReducer(reducer, appData);

    const [response, setResponse] = useState(null)

	const fetchQuizzes = async () => {
		try {
			const res = await axios.get(`https://localhost:3000/quizzes`)
			setResponse(res.data)
		} catch (err) {
			console.log(err)
		}
	}

    const fetchResults = async () => {
		try {
			const res = await axios.get(`https://localhost:3000/results`)
			setResponse(res.data)
		} catch (err) {
			console.log(err)
		}
	}


    function reducer(state, action) {
        switch (action.type) {

            case 'INITIALIZE':
                return { ...action.payload, dataInitialized: true }

            case 'QUIZZES_CLICKED': {
                //
            }

            case 'RESULTS_CLICKED': {
                //
            }

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
            dispatch({ type: "INITIALIZE", payload: (JSON.parse(quizData)) })
        }

    }, []);

    useEffect(() => {
        const resultData = localStorage.getItem('resultdata');
        if (resultData == null) {
            localStorage.setItem('quizdata', JSON.stringify(appData));
            dispatch({ type: "INITIALIZE", payload: appData })

        } else {

            dispatch({ type: "INITIALIZE", payload: (JSON.parse(quizData)) })
        }

    }, []);

    //

    return (
        <div className="app">
            <div className="homescreen">
                <div className="title">Tervetuloa</div>
                <button name ="quizzes" onClick={()=>props.dispatch({type:"QUIZZES_CLICKED", 
                payload:{quizIndex:props.quizIndex,quizCollectionIndex:props.quizCollectionIndex}})}>Tentit</button>
                <button name ="results" onClick={()=>props.dispatch({type:"RESULTS_CLICKED", 
                payload:{quizIndex:props.quizIndex,quizCollectionIndex:props.quizCollectionIndex}})}>Tulokset</button>
            </div>
        </div>
    )
}


export default Home