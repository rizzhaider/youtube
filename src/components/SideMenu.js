import React from 'react'
import { NavLink } from 'react-router-dom';
import { menuToogle } from '../utils/appSlice';
import { useDispatch } from 'react-redux';

function SideMenu() {

    const dispatch = useDispatch();

    const menuToogleHandler = () => {
        dispatch(menuToogle());
    }

    return (
        <>
            <div className='flex p-4 m-2 border-b-[1px]'>
                <img className='h-8 cursor-pointer' alt="menu" src="https://icons-for-free.com/iconfiles/png/512/hamburger-1324760528048814325.png"
                    onClick={() => menuToogleHandler()} />
                <NavLink to="/youtube">
                    <img className='h-8' alt="logo" src="https://freepngimg.com/thumb/youtube/77791-logo-computer-youtube-icons-download-free-image.png" />
                </NavLink>
            </div>


            <div className='py-2 px-1 h-[90%] overflow-y-auto'>
                <ul>
                    <li className='py-2 px-4 rounded-lg hover:bg-gray-200'><NavLink className={'flex flex-row items-center'} to="/">
                        <span className='mr-6'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        </span>
                        <span className='text-sm'>Home</span>
                    </NavLink></li>

                    {/* <li className='py-2 px-4 rounded-lg hover:bg-gray-200'>
                        <NavLink className={'flex flex-row items-center'}>
                            <span className='mr-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                                </svg>
                            </span>
                            <span className='text-sm'>Shorts</span>
                        </NavLink>

                    </li>

                    <li className='py-2 px-4 rounded-lg hover:bg-gray-200'>

                        <NavLink className={'flex flex-row items-center'}>
                            <span className='mr-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                </svg>
                            </span>
                            <span className='text-sm'>Susbcription</span>
                        </NavLink></li>

                    <li className='py-2 px-4 rounded-lg hover:bg-gray-200'><NavLink to="/demo" className={'flex flex-row items-center'}>
                        <span className='mr-6'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                            </svg>

                        </span>
                        <span className='text-sm'>Demo</span>
                    </NavLink></li> */}
                </ul>


            </div>
        </>


    )
}

export default SideMenu