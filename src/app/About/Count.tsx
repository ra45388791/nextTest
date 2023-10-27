import { LegacyRef, useContext } from 'react';
import { countContext } from '@/DataContext';



export default function Count() {
    const reducer = useContext(countContext);
    const state = reducer === undefined ? undefined : reducer.state
    const dispatch = reducer === undefined ? undefined : reducer.dispatch



    function addCount() {
        if (dispatch === undefined) return undefined
        dispatch({ type: "increment" })
    }

    function minusCount() {
        if (dispatch === undefined) return undefined
        dispatch({ type: "decrement" })
    }

    return (
        <div className='py-6 px-10 bg-stone-300 text-black' >
            測試useContext：{reducer === undefined ? "undefined" : state}
            <h3>reducer測試</h3>
            <div>
                <button onClick={addCount}>全局+1</button>
                <button onClick={minusCount}>全局-1</button>
            </div>
        </div>
    )
}