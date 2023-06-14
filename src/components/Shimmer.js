import React from 'react'

const Shimmer = props => {
  return (
    <>{
        Array(20).fill("").map((e, index) => <div className='w-full h-56 rounded-md bg-gray-300 flex justify-center max-sm:items-center flex-col' key={index}></div>)
    }</>
  )
}


export default Shimmer