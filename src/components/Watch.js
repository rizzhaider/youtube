import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import useMedia from '../utils/useMedia';
import { SESSION_STORAGE_KEY, YOUTUBE_VIDE_API, mdMedia, nFormatter, smMedia, timeAgo, xlMedia, xsMedia } from '../utils/constant';
import VideoSuggestionCard from './VideoSuggestionCard';

function Watch() {
    const { snippet, statistics } = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_KEY.VIDEO_DESCRIPTION));
    const [searchParams] = useSearchParams()
    const xs = useMedia(xsMedia);
    const sm = useMedia(smMedia);
    const md = useMedia(mdMedia);
    const xl = useMedia(xlMedia);

    const [videos, setVideos] = useState([]);
    const getVideoList = async () => {
        console.log("sdadasdd");
        try {
            const data = await fetch(YOUTUBE_VIDE_API);
            const json = await data.json();
            setVideos(json?.items)
        } catch (error) {
            console.log(error)
        }
    }

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
        getVideoList();
    }, [])
    return (
        <div id="watchContainer" className='h-[88vh] overflow-y-auto'>
            <div className={`container mx-auto p-4`}>
                <div className='grid grid-cols-12 gap-1 h-[89vh] pb-5'>
                    <div className='col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-8 xl:col-span-8 2xl:col-span-9'>
                        <div className='mb-3'>
                            <iframe
                                width="100%"
                                height={`${xl ? '500' : md ? '400' : sm ? '300' : xs ? '250' : '600'}`}
                                src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                        </div>
                       <div className='flex'>
                       <img className='h-9 mr-2' alt="user" src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png" />
                        <div>
                        <h1 className='font-bold max-sm:w-[300px] line-clamp-2'>{snippet?.title}</h1>
                        <h1 className='font-bold'>{snippet?.channelTitle}</h1>
                        {statistics?.viewCount && <span className='text-sm font-bold'> {nFormatter(statistics?.viewCount)} views ·  </span>}
                        <span className='text-sm font-bold'>{timeAgo(snippet?.publishedAt)}</span>
                        </div>
                       </div>
                        <div>
                            <CommentsContainer />
                        </div>
                    </div>
                    <div className='col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 xl:col-span-4 2xl:col-span-3 mb-10'>
                        <LiveChat />

                        <div className='p-3 mt-5 border-t-[1px]'>
                            {videos.length !== 0 &&
                                videos.map(video => {
                                    return <NavLink key={video.id} to={"/watch?v=" + video.id} onClick={() => {
                                        document.getElementById("watchContainer").scrollTo(0,0)
                                        sessionStorage.setItem(SESSION_STORAGE_KEY.VIDEO_DESCRIPTION, JSON.stringify(video))
                                        
                                    }}>
                                        <VideoSuggestionCard info={video} />
                                    </NavLink>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Watch