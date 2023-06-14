import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import useMedia from '../utils/useMedia';
import { YOUTUBE_VIDE_API, mdMedia, smMedia, xlMedia, xsMedia } from '../utils/constant';
import VideoSuggestionCard from './VideoSuggestionCard';

function Watch() {
    const [searchParams] = useSearchParams()
    const xs = useMedia(xsMedia);
    const sm = useMedia(smMedia);
    const md = useMedia(mdMedia);
    const xl = useMedia(xlMedia);

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

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
        getVideoList();
    }, [])
    return (
        <div className='h-[88vh] overflow-y-auto'>

            <div className={`container mx-auto p-4`}>
                <div className='grid grid-cols-12 gap-1 h-[89vh] pb-5'>
                    <div className='col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-8 xl:col-span-8 2xl:col-span-9'>
                        <div>
                            <iframe
                                width="100%"
                                height={`${xl ? '500' : md ? '400' : sm ? '300' : xs ? '250' : '600'}`}
                                src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
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
                                    return <NavLink key={video.id} to={"/watch?v=" + video.id} onClick={() => window.scrollY(0)}>
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