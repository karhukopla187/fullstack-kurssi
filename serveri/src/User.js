
//käyttäjätietojen anto

const User = (props) => {
    return (
        <div>
            <div>Käyttäjänimi:</div>
            <input type="text" onChange={(event) => {
                props.dispatch({
                    type: "NAME_GIVEN",
                    payload:
                    {
                        name: event.target.value
                    }
                })
            }}
                value={props.question.q} />
            <div>Salasana:</div>
            <input type="text" onChange={(event) => {
                props.dispatch({
                    type: "PASS_GIVEN",
                    payload:
                    {
                        pass: event.target.value
                    }
                })
            }}
                value={props.question.q} />
            <button onClick={() => props.dispatch({
                type: "IS_ADMIN",
                payload: { type: "admin" }
            })}>Olen admin</button>
            <button onClick={() => props.dispatch({
                type: "NOT_ADMIN",
                payload: { type: "admin" }
            })}>En ole admin</button>
        </div>
    )
}

export default User;