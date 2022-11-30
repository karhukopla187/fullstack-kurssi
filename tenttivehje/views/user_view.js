import './App.css';
const axios = require('axios');

const User = (props) => {
    



return (
    <div className="user">
      <div> "Tervetuloa " {props.user.name} </div>
        <button onClick={()=>props.dispatch({type:"GET_QUIZZES"})}/>
        <button onClick={()=>props.dispatch({type:"GET_RESULTS"})}/>

    </div>
    
  );
}

export default User;


