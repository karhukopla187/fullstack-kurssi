import Option from './Option';

const Question=(props) => {
  return (
    <div>
      <div>{props.question.question}</div>
      <div>{props.question.options.map(option=><Option option={option} />)}</div>
    </div>
  );
}

export default Question;