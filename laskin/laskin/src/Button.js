
function Button(props) {
    return (
        <button onClick={()=>props.buttonPressed(props.button)}>{props.button}</button>
    )
}

export default Button;