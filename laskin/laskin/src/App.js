import './App.css';
import {useState} from "react"
import Button from './Button';

//tässä ei nyt vielä ole oikein minkäänlaista tyylimuotoilua



let buttons = ["7","8","9","/","4","5","6","*","1","2","3","-","0",".","+","=","C","<"]
const operators = ["+","-","*","/"]

function App() {
  const [text,setText] =useState("")
  const buttonPressed =(x)=>{
     console.log(text)
    if (x==="=") {setText(eval(text)); return}
    if (x==="C") {setText(""); return}
    if (x==="<") {setText(text.slice(0,-1)); return}
    //if (!Number.isFinite(text.slice(-1)) && operators.indexOf(x)>=0)
      //{setText(text.slice(0,-1)+x); return}
    if (text==="" && x==="*" || text==="" && x==="/") {setText(""); return}
    setText(text+x)
  }
  return (
    <div>
      <p>{text}</p>
      {buttons.map((button,index)=><Button key={index} buttonPressed={buttonPressed} button={button}/>)}
    </div>
  );
}

export default App;
