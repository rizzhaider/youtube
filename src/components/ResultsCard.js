import React from 'react'
import { timeAgo } from '../utils/constant';

const ResultsCard = ({ info }) => {
    const { snippet, statistics } = info;
    const { thumbnails } = snippet;
    return (
        <div className='flex mb-5'>
            <img className="rounded-lg mr-2" alt="thumbnail" src={thumbnails?.medium?.url} />
            <div>
                <h1 className='font-bold line-clamp-2 text-sm'>{snippet?.title}</h1>
                <h1 className='text-xs text-gray-500'>{snippet?.channelTitle}</h1>
                {statistics?.viewCount && <span className='text-xs text-gray-500'> {statistics?.viewCount} views ·  </span>}
                <span className='text-xs text-gray-500'>{timeAgo(snippet?.publishedAt)}</span>
            </div>
        </div>
    )
}

export default ResultsCard