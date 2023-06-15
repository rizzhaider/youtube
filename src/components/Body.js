import React from 'react'
import { Outlet } from 'react-router-dom'
import SideMenu from './SideMenu'
import { useDispatch, useSelector } from 'react-redux'
import { menuToogle } from '../utils/appSlice';
import Header from './Header';

function Body() {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  const menuToogleHandler = () => {
    console.log("sddsdsa");
    dispatch(menuToogle());
}
  return (
    <>
     <Header />
   <div className={`top-0 left-0 bg-white fixed h-full z-40 ease-in-out duration-500 ${
    isMenuOpen ? "translate-x-0 w-56 block" : "translate-x-full w-0 left-[-50px] hidden"}`}> 
        <SideMenu />
      </div>
      {
        isMenuOpen && <div className="absolute w-full h-screen bg-opacity-60 bg-black ease-out transition-opacity duration-700" onClick={() => menuToogleHandler()}></div>
      }
      <div className='w-full overflow-hidden'>
      <div className="w-full mx-auto">
        <Outlet />
      </div>
    </div>
    </>
    
  )
}

export default Body