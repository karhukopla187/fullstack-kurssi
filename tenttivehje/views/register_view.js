import './App.css';
const axios = require('axios');

const Register = (props) => {
    return (
      <div className="register">
        <p>Syötä käyttäjätunnus ja salasana rekisteröityäksesi</p>
        <label for="username">Tunnus:</label>
        <input type="text" id="username" onChange={(event)=>
        axios.post('https://localhost:3000/register')
          {...props.dispatch({type:"REGISTER",
          payload:
            {username:event.target.value}
          })}}  value = {props.user.username}/>
          <label for="password">Salasana:</label>
        <input type="text" id="password" onChange={(event)=>
          {props.dispatch({type:"REGISTER",
          payload:
            {
            password:event.target.value}
          })}}  value = {props.user.password}/>
      </div>
    );
  }
  
  export default Login;