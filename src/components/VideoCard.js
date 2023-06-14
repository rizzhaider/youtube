import React from 'react'
import { nFormatter, timeAgo } from '../utils/constant';

function VideoCard({ info }) {
    const { snippet, statistics } = info;
    const { thumbnails } = snippet;
    return (
        <div className='flex justify-center max-sm:items-center flex-col'>
            <img className="w-auto rounded-lg" alt="thumbnail" src={thumbnails?.medium?.url} />
            <div className='p-2 flex align-top'>
            <img className='h-9 mr-2' alt="user" src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png" />
                <div>
                <h1 className='font-bold max-sm:w-[300px] line-clamp-2'>{snippet?.title}</h1>
                <h1 className='text-sm text-gray-500'>{snippet?.channelTitle}</h1>
                <span className='text-sm text-gray-500'> {nFormatter(statistics?.viewCount)} views ·  </span>
                <span className='text-sm text-gray-500'>{timeAgo(snippet?.publishedAt)}</span>
                </div>
            </div>


        </div>
    )
}

export const VideoHoc = ({ comment }) => {
    return (
        <div className='p-1 border border-red-600'>
            <VideoCard info={comment} />
        </div>
    )
}

export default VideoCard;