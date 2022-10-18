import Question from './Question';

const Quiz=(props) => {
    return (
      <div className="quiz">
        <h1 className="quizname">{props.quiz.name}</h1>
        <input type="text" onChange={(event)=>
          { props.dispatch({type:"QUIZ_NAME_CHANGED",payload:event.target.value})}}
          value = {props.quiz.name}/>
        
          {props.quiz.questions.map(question=><Question question={question} />)}

      </div>
    );
  }

  export default Quiz;