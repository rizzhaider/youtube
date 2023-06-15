import React, { useState, useMemo, useCallback } from 'react'
import ChildDemo from './ChildDemo';

const findPrime = num => {
    let i, primes = [2, 3], n = 5;
    const isPrime = n => {
        let i = 1, p = primes[i],
            limit = Math.ceil(Math.sqrt(n));
        while (p <= limit) {
            if (n % p === 0) {
                return false;
            }
            i += 1;
            p = primes[i];
        }
        return true;
    }
    for (i = 2; i <= num; i += 1) {
        while (!isPrime(n)) {
            n += 2;
        }
        primes.push(n);
        n += 2;
    };
    return primes[num - 1];
}

const Demo = () => {
    const [text, setText] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const primeNumber = useMemo(() => findPrime(text), [text]);
    const setChildHandler = useCallback(() => {
        
    },[]) // refrencial equality
    return (
        
        <>
            <div className={`p-2 m-2 border border-gray-400 w-1/2 ${isDarkMode && "bg-black"}`}>
              <button className='border p-1 bg-green-300' onClick={() => setIsDarkMode(!isDarkMode)}>Toggle</button>
                <div>
                <input type="number" className='border' value={text} onChange={(e) => setText(e.target.value)} />
                </div>
                <h1 className={`font-bold ${isDarkMode && "text-white"}`}>nth Prime Number: {primeNumber}</h1>
                <ChildDemo handler={setChildHandler}/>
            </div>
            
        </>

    )
}

export default Demo