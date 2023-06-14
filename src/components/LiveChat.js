import React, { useState, useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addChatMessage } from '../utils/chatSlice'
import { generateName, randomString } from '../utils/constant'

const LiveChat = () => {
    const [userLiveMessage, setUserLiveMessage] = useState("")
    const chatMessages = useSelector(store => store.chat);
    const dispatch = useDispatch();
    useEffect(() => {
        const timer = setInterval(() => {
            dispatch(addChatMessage({
                name: generateName(),
                text: randomString(25) + "🚀"
            }))
        }, 500)

        return () => {
            clearInterval(timer)
        }
    }, [])
    return (
        <div className='border rounded-lg flex flex-col'>
            <div className='p-2 border-b-[1px] mb-2'>
             <h1 className='text-md font-bold'>Top Chat</h1>
            </div>
            {
                chatMessages.length === 0 ? 'No Live Messages' : <div className='h-[458px] p-2 overflow-y-scroll flex flex-col-reverse'>
                    {
                        chatMessages.map((data, i) => <ChatMessage key={i} {...data} />)
                    }

                </div>
            }

            <form className='mt-2 p-2' onSubmit={(e) => {
                e.preventDefault();
                if (userLiveMessage.length !== 0) dispatch(addChatMessage({
                    name: "Rizwan Haider",
                    text: userLiveMessage
                }));

                setUserLiveMessage("");

            }}>
                <input type="text" value={userLiveMessage} placeholder='Type a message' className='border border-slate-400 rounded-lg px-2 py-2 w-4/5' onChange={(e) => {
                    setUserLiveMessage(e.target.value);
                }} />
                <button className='border w-[18%] ml-1 py-2 bg-red-500 text-white rounded-lg'>Add</button>
            </form>
        </div>

    )
}

export default LiveChat