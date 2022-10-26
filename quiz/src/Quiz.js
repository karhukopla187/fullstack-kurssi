import './App.css';
import Question from './Question';

const Quiz = (props) => {
  return (
    <div>
      <div> {props.quiz.name} </div>

      <input type="text" onChange={(event)=>
      {props.dispatch({type:"QUIZ_NAME_CHANGED",
        payload:{
          name:event.target.value,
          questionIndex:props.questionIndex,
          quizCollectionIndex:props.quizCollectionIndex,
          quizIndex:props.quizIndex}
        })}}  
        value = {props.quiz.name}/>

      <div> {props.quiz.questions.map((question,index) => <Question dispatch={props.dispatch}
          quizCollectionIndex={props.quizCollectionIndex} 
          questionIndex={index} 
          quizIndex={props.quizIndex} 
          question={question}/> )} </div>
      <button onClick={()=>props.dispatch({type:"ADD_QUESTION", 
        payload:{quizIndex:props.quizIndex,quizCollectionIndex:props.quizCollectionIndex}})}>Lisää kysymys</button>
    </div>
  );
}

export default Quiz;
