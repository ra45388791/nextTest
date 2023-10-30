'use client'
import React, { useReducer, useRef } from 'react';
import { countContext } from '@/DataContext';
import Section from './Section';
import Count from './Count';



export default function About() {

    const count = 0
    const [state, dispatch] = useReducer(reducerFunc, count);
    const getERef = useRef(null);


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

    function showMSG() {
        console.log(getERef);
        console.log(getERef.current);
    }


    return (
        <countContext.Provider value={{ state: state, dispatch: dispatch }}>
            <>
                <div>
                    <p>
                        {state}
                    </p>
                    {/* <button onClick={addCount}>+1按鈕</button> */}
                </div>

                <div>
                    <Section ref={getERef}>
                        <Count />
                    </Section>
                    <button onClick={showMSG}>showMSG</button>
                </div>
                <div className='h-96'>123</div>
                <div className='h-96'>456</div>
                <div className='h-96'>123</div>
                <div className='h-96'>456</div>
            </>
        </countContext.Provider>
    )
}
