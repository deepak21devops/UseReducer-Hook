import React, { useReducer } from 'react'


const initialState = {
    first: " ",
    last: " ",
    data: []

}
const reducer = (curState, action) => {
    switch (action.type) {
        case "first":
            return { ...curState, first: action.payload }

        case "last":
            return { ...curState, last: action.payload }

        case "submit":
            return { ...curState, data: [...curState.data, { first: curState.first, last: curState.last }] }

        default:
            return initialState
    }


}


function ParentComponent() {

    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state.data)
    return (
        <div>
            <label>First Name:</label>
            <input type="text" value={state.first} onChange={(e) => dispatch({ type: "first", payload: e.target.value })}></input>

            <label>Last Name:</label>
            <input type="text" value={state.last} onChange={(e) => dispatch({ type: "last", payload: e.target.value })}></input>

            <button onClick={() => dispatch({ type: "submit" })}>Add Me</button>
        </div>
    )
}

export default ParentComponent
