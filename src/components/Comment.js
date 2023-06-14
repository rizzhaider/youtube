import {memo} from 'react'

const Comment = ({data}) => {
    const { name, text } = data;
    return (
        <div className='flex mt-5'>
            <img className='h-8' alt="user" src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png" />
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default memo(Comment);