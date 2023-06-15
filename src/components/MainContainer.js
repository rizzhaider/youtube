import { useEffect } from 'react';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';


function MainContainer() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu())
    }, [])
    return (
      <div>
        <div className={`overflow-x-auto scrollbar-hide`}>
        <ButtonList />
        </div>
        <div className='h-[85vh] overflow-y-auto'>
        <VideoContainer />
        </div>
       
        </div>
    )
}

export default MainContainer