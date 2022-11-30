import './App.css';
const axios = require('axios');

const Login = (props) => {
    return (
      <div className="login">
        <p>Syötä käyttäjätunnus ja salasana kirjautuaksesi sisään</p>
        <label for="username">Tunnus:</label>
        <input type="text" id="username" onChange={async (event) => {
        try {
          await axios.post('https://localhost:3000/login'),

        } catch (error) {
          console.log(error)
        }
      }
        await axios.post('https://localhost:3000/login')
          {...props.dispatch({type:"LOGIN",
          payload:
            {username:event.target.value}
          })}}  value = {props.user.username}/>
          <label for="password">Salasana:</label>
        <input type="text" id="username" onChange={(event)=>
          {props.dispatch({type:"LOGIN",
          payload:
            {password:event.target.value}
          })}}  value = {props.option.option}/>
        <button onClick={() =>
      </div>
    );
  }
  
  export default Login;