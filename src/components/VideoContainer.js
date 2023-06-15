import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { SESSION_STORAGE_KEY, YOUTUBE_VIDE_API } from '../utils/constant'
import VideoCard from './VideoCard';
import Shimmer from './Shimmer';

function VideoContainer() {
    const [videos, setVideos] = useState([]);
    const getVideoList = async () => {
       try {
        const data = await fetch(YOUTUBE_VIDE_API);
        const json = await data.json();
        setVideos(json?.items)
       } catch (error) {
        console.log(error)
       }
    }
    useEffect(() => {
        getVideoList();

    }, [])
    return videos?.length === 0 ?<div className={`container mx-auto p-4`}>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4'>
        <Shimmer />
        </div></div>:(
        <>
            <div className={`container mx-auto p-4`}>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4'>
            
            {/* <VideoHoc comment={videos[0]}/> */}
           
           {
               videos.map(video => {
                   return <NavLink key={video.id}  to={"/watch?v=" + video.id} onClick={() => sessionStorage.setItem(
                    SESSION_STORAGE_KEY.VIDEO_DESCRIPTION, JSON.stringify(video)
                   )}>
                   <VideoCard info={video} />
                   </NavLink>
               })
           }
            
            
            
        </div>
            </div>
           
        </>
        
        
    )
}

export default VideoContainer