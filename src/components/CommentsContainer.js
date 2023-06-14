import React, { useEffect, useState } from 'react'
import useMedia from '../utils/useMedia';
import { smMedia, xsMedia } from '../utils/constant';
import CommentLists from './CommentLists';

const commentsData = [
    {
        name: "Johne Doe",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        replies: [
            {
                name: "Johne Doe",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                replies: [
                    {
                        name: "Johne Doe",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                        replies: [
                            {
                                name: "Johne Doe",
                                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                                replies: [
                                    {
                                        name: "Johne Doe",
                                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                                        replies: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: "Johne Doe",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                replies: []
            }
        ]
    },
    {
        name: "Johne Doe",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        replies: [
            {
                name: "Johne Doe",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                replies: [{
                    name: "Johne Doe",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                    replies: [
                        {
                            name: "Johne Doe",
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                            replies: []
                        },
                        {
                            name: "Johne Doe",
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                            replies: []
                        }
                    ]
                }]
            }
        ]
    },
    {
        name: "Johne Doe",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        replies: []
    },
    {
        name: "Johne Doe",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        replies: []
    },
    {
        name: "Johne Doe",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        replies: [{
            name: "Johne Doe",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            replies: [
                {
                    name: "Johne Doe",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                    replies: []
                }
            ]
        },
        {
            name: "Johne Doe",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            replies: []
        },
        {
            name: "Johne Doe",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            replies: []
        },
        {
            name: "Johne Doe",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            replies: []
        }
        ]
    },
    {
        name: "Rizwan Haider",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        replies: [
            {
                name: "Johne Doe",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                replies: [
                    {
                        name: "Johne Doe",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                        replies: [
                            {
                                name: "Johne Doe",
                                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                                replies: [
                                    {
                                        name: "Shara Zehra",
                                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                                        replies: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
]



const CommentsContainer = () => {
    const [isVisible, setIsVisible] = useState(true);
    const xs = useMedia(xsMedia);
    const sm = useMedia(smMedia);
    
    useEffect(() => {
      if(xs || sm){
        setIsVisible(false)
      }else{
        setIsVisible(true)
      }
    },[xs, sm])

    return (
        <div className='p-2 border mt-2 rounded-lg mb-2'>
            <div className='flex justify-between items-center py-1 px-2 cursor-pointer' onClick={() => {
                    setIsVisible(isVisible => !isVisible)
                }}>
            <h1 className='text-lg font-bold py-2'>Comments :</h1>
            {
                isVisible ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
              </svg>
              : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
            </svg>
            
              
            }
            </div>
               
                <div className={`py-1 px-2 transition duration-0 ease-in-out ${isVisible ? 'block duration-700' :'hidden'} max-sm:h-96 overflow-y-auto`}> 
                    <CommentLists comments={commentsData} />
                </div>
               
                

        </div>
    )
}

export default CommentsContainer