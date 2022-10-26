import './App.css';
import { useState, useReducer, useEffect } from "react"
import axios from 'axios' 


function reducer(state,action) {
    switch (action.type) {
        case 'FETCH':
            console.log("haetaan vitsi")
            return {...state,fetching:true}
        case 'FETCHED':
            console.log("vitsi haettu")
            return {...state,joke:action.payload}
        case 'FETCH_FAILED':
            console.log("haku epäonnistui")
            return {...state,fetchFailed:true,fetching:false}
        default:
            throw new Error("err")
    }
}

function ChuckAPI() {
    const [appData,dispatch] = useReducer(reducer, {joke:[],fetching:false,fetchFailed:false})

    useEffect(() => {
        async function getData() {
            try {
                dispatch({type:'FETCH'})
                let result = await axios('https://api.chucknorris.io/jokes/random')
                dispatch({type:'FETCHED',payload:result.data.joke})
                console.log(result.data.joke)
            } catch (error) {
                console.log("error",error)
                dispatch({type:'FETCH_FAILED'})
            }
        }
        getData()
    },[])

    return (
        <div>{appData.joke.map(item=><div>{item.value}</div>)}
        <button onClick={() => dispatch({type:'FETCH'})}>Hae uusi vitsi</button>
        </div>
    )
}

export default ChuckAPI


