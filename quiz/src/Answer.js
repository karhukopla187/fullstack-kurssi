
const Answer = (props) => {
    return (
        <div className='answer'>
            <input type='checkbox'></input>
            <div> {props.answer} </div>
        </div>
    )
}

export default Answer;