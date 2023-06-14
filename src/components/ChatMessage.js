import React from 'react'

const ChatMessage = ({ name, text }) => {
    return (
        <div className='flex p-2 mb-1 bg-slate-100  shadow-lg items-center break-words'>
            <img className='h-6 mr-1' alt="user" src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png" />
            <div>
            <span className='mr-1 font-bold text-sm'>{name} </span>
            <span className='text-xs'>{text}</span>
            </div>
        </div>
    )
}

export default ChatMessage