import './App.css';
import Question from './question';
const db = require("../server/db")


function reducer(state, action) {
    switch (action.type) {
  

      default:
      throw new Error("reducerissa meni jotain pieleen");
    }
}

const Results = (props) => {
  return (
    <div>
      <div> {props.result.name} </div>


      <div> {props.quiz.questions.map((question,index) => <Question dispatch={props.dispatch}
          questionIndex={index} 
          quizIndex={props.quizIndex} 
          question={question}/> )} </div>
      <button onClick={()=>props.dispatch({type:"RESULT_DELETED", 
        payload:{resultIndex:props.resultIndex}})}>Poista</button>
    </div>
  );
}

export default Results
