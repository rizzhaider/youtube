import React from 'react'

function Button({name}) {
  
  return (
    <div>
        <button className='truncate bg-gray-200 py-2 px-3 rounded-lg m-2 text-sm min-w-[80px] font-semibold'>{name}</button>
    </div>
  )
}

export default Button