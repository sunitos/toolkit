import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import {plus, minus, reset,} from './redux/slices/counterSlice'
import { plus, minus, reset } from './redux/slices/counterSlice';

const Counter = () => {
    const { counterData } = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    const increment = () => {
        dispatch(plus());
    };

    return (
        <div>
            <h1>{counterData}</h1>
            <button onClick={increment}>+</button>
            <button onClick={() => dispatch(minus())}>-</button >
            <button onClick={() => dispatch(reset())}>reset</button>
        </div >
    );
}

export default Counter