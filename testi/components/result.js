import './App.css';
import Question from './question';
const db = require("../server/db")



/*

r
*/

function reducer(state, action) {
    switch (action.type) {
  
      case 'DELETE_RESULT': {
        console.log("poistettiin tulos", action)
      }

      default:
      throw new Error("reducerissa meni jotain pieleen");
    }
}

const Result = (props) => {
  return (
    <div>
      <div> {props.result.name} </div>



      <div> {props.result.questions.map((question,index) => <Question dispatch={props.dispatch}
          resultIndex={index} 
          question={question}/> )} </div>
      <button onClick={()=>props.dispatch({type:"DELETE_RESULT", 
        payload:{resultIndex:props.resultIndex}})}>Poista tulos</button>
    </div>
  );
}

export default Result
