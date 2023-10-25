'use client'
import React, { useState, useReducer } from 'react';
import Section from './Section';
import { countContext } from '@/DataContext';



export default function About() {

    // const [count, setCount] = useState(0);
    const count = 0
    const [state, dispatch] = useReducer(reducerFunc, count);

    function addCount() {
        // let c = count;
        // setCount(c += 1)
    }

    function reducerFunc(state: number, action: { type: string }) {
        let c = state;
        switch (action.type) {
            case "increment":
                return c += 1;
            case "decrement":
                return c -= 1;
            default:
                return c
        }
    }


    return (
        <countContext.Provider value={{ state: state, dispatch: dispatch }}>
            <div>
                <p>
                    {state}
                </p>
                {/* <button onClick={addCount}>+1按鈕</button> */}
            </div>
            <div>
                <Section />
            </div>
        </countContext.Provider>
    )
}
