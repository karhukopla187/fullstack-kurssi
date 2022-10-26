import './App.css';
import Quiz from './Quiz'

const QuizCollection = (props) => {
  return (
    <>
      <div>{props.quizCollection.name}</div>
      <input type="text" onChange={event=>
        { props.dispatch({type:"QC_NAME_CHANGED",
          payload:{index:props.quizCollectionIndex,name:event.target.value} })}} 
          value = {props.quizCollection.name}/>
      <div>miksi:</div>
      <div>{props.quizCollection.quizList.map((quiz,index) => 
        <Quiz dispatch={props.dispatch} 
          quizCollectionIndex={props.quizCollectionIndex} 
          quizIndex={index} 
          quiz={quiz} />)}</div>
    </>
  );
}

export default QuizCollection;