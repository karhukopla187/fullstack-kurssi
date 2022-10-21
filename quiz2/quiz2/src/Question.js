import './App.css';
import Answer from './Answer'

const Question = (props) => {
  return (
    <div className='question'>
      <div> {props.question.q} 
      
      <input type="text" onChange={(event)=>
        {props.dispatch({type:"QUESTION_CHANGED",
        payload:
          {
          q:event.target.value,
          questionIndex:props.questionIndex,
          quizCollectionIndex:props.quizCollectionIndex,
          quizIndex:props.quizIndex}
          })}}  value = {props.question.q}/>
      
      </div>
        {props.question.a.map(answer => 
          <div> <Answer answer={answer}/> </div>)}
    </div>
  );
}

export default Question;