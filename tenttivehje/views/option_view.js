const Option=(props) => {
    return (
      <div className="option">
        <input type="checkbox">{props.option.option}</input>
      
        <input type="text" onChange={(event)=>
          {props.dispatch({type:"OPTION_CHANGED",
          payload:
            {
            option:event.target.value,
            optionIndex:props.index,
            questionIndex:props.questionIndex}
          })}}  value = {props.option.option}/>
      </div>
    );
  }
  
  export default Option;