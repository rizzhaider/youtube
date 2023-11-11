import React, { useEffect, useRef, useState } from 'react'
const products = [
    {
      "id": 11,
      "name": "VPN",
      "releaseDate": "01-01-1992",
      "totalSales": 20000
    },
    {
      "id": 12,
      "name": "CISCO",
      "releaseDate": "01-01-2000",
      "totalSales": 569
    },
    {
      "id": 13,
      "name": "Webex",
      "releaseDate": "01-01-2008",
      "totalSales": 3000
    }
  ]
const Demo2 = () => {
    const [productLists, setProductLists] = useState([])
    useEffect(() => {
        products.sort((a,b) => {
            return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
        });
      setProductLists(products);
    },[])
    
    let num = 0;
    let refCounter = useRef(0)
    const [counter, setCounter] = useState(0);
    return (
        <div className='flex'>
            <div className='border border-gray-400 p-2 m-2 w-1/2'>
                <h1>Static var : {num}</h1>
                <h1>State Var : {counter}</h1>
                <h1>Reference Var: {refCounter.current}</h1>
                <button className='border border-green-300 p-2 ml-1' onClick={() => {
                    num = num + 1;
                }}>Static Counter</button>
                <button className='border border-green-300 p-2 ml-1' onClick={() => {
                    setCounter((prev) => prev + 1)
                }}>State Counter</button>
                <button className='border border-green-300 p-2 ml-1' onClick={() => {
                    refCounter.current = refCounter.current + 1;
                }}>Ref Counter</button>
            </div>

            {
                productLists.length && <div>
                <table>
                    <thead>
                        <th>id</th>
                        <th>name</th>
                        <th>releaseDate</th>
                        <th>totalSales</th>
                    </thead>
                    <tbody>
                        {
                            products.map((item) => {
                                return <>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.releaseDate}</td>
                                    <td>{item.totalSales}</td>
                                </tr>
                                </>
                            })
                        }
                    </tbody>
                </table>
            </div>
            }
        </div>
    )
}

export default Demo2