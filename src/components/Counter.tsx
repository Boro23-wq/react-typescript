import React from 'react';

const initialState = { count: 0 };

type ACTIONTYPE = { type: 'increment'; payload: number } | { type: 'decrement'; payload: number };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload };
        case 'decrement':
            return { count: state.count - action.payload };
        default:
            throw new Error();
    }
}

function Counter() {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>-</button>
            <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>+</button>
        </>
    );
}

export default Counter;
