import React, { useRef, useState } from 'react'

const Demo2 = () => {
    let num = 0;
    let refCounter = useRef(0)
    const [counter, setCounter] = useState(0);
    return (
        <>
            <div className='border border-gray-400 p-2 m-2 w-1/2'>
                <h1>Static var : {num}</h1>
                <h1>State Var : {counter}</h1>
                <h1>Reference Var: {refCounter.current}</h1>
                <button className='border border-green-300 p-2 ml-1' onClick={() => {
                    num = num + 1;
                    console.log(num);
                }}>Static Counter</button>
                <button className='border border-green-300 p-2 ml-1' onClick={() => {
                    setCounter((prev) => prev + 1)
                }}>State Counter</button>
                <button className='border border-green-300 p-2 ml-1' onClick={() => {
                    refCounter.current = refCounter.current + 1;
                    console.log(refCounter.current)
                }}>Ref Counter</button>
            </div>


        </>
    )
}

export default Demo2