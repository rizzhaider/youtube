import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { menuToogle } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API, xsMedia } from '../utils/constant';
import { addSearchCashe } from '../utils/searchSlice';
import useMedia from '../utils/useMedia';
import { NavLink, useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const xs = useMedia(xsMedia);
    const searchCashe = useSelector(store => store.search);
    const [searchedQuery, setSearchedQuery] = useState("");
    const [suggestionResults, setSuggestionResults] = useState([]);
    const [isSuggestionOpened, setIsSuggestionOpened] = useState(false);
    const [mobileSearchBar, setMobileSearchBar] = useState(false);



    const menuToogleHandler = () => {
        dispatch(menuToogle());
    }

    const getSuggestionSearch = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchedQuery);
        const json = await data.json();
        setSuggestionResults(json[1]);
        dispatch(addSearchCashe({
            [searchedQuery]: json[1]
        }))
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCashe[searchedQuery]) {
                setSuggestionResults(searchCashe[searchedQuery]);
            } else {
                getSuggestionSearch();
            }
        }, 200);

        return () => {
            clearTimeout(timer);
        }
    }, [searchedQuery])


    return (
        <>
            {
                xs && mobileSearchBar ? <div className='grid grid-cols-12 p-2 h-20 items-center'>
                    <div className='cols-span-1 p-4'>
                        <div className="cursor-pointer" onClick={() => setMobileSearchBar(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>

                        </div>

                    </div>
                    <div className='col-span-11 p-4'>
                        <div className='relative justify-center'>
                            <input
                                className='w-2/3 border border-gray-400 bg-gray-100 p-2 rounded-l-full'
                                type="text"
                                placeholder='search'
                                value={searchedQuery}
                                onFocus={() => setIsSuggestionOpened(true)}
                                onBlur={() => setTimeout(() => {
                                    setIsSuggestionOpened(false)
                                }, 250)}
                                onChange={(e) => setSearchedQuery(e.target.value)} />
                            <button className='px-4 py-2 border border-gray-400 rounded-r-full border-l-0 bg-gray-50'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline">
                                    <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                                </svg>
                            </button>
                            {
                                isSuggestionOpened && suggestionResults.length !== 0 && <div className='absolute shadow-md bg-white py-2 w-2/3 border rounded-lg'>
                                    <ul>
                                        {suggestionResults.map((suggestionResult) => {
                                            return <NavLink key={suggestionResult} to={"/results?search_query=" + suggestionResult.split(" ").join("+")}>
                                                <li className="py-1 px-3 mb-1 hover:bg-gray-100 flex items-center text-sm"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                                            </svg>
                                                &nbsp;
                                                {suggestionResult}</li>
                                            </NavLink>
                                        })}
                                    </ul>

                                </div>
                            }
                        </div>



                    </div>
                </div> :
                    <div className='grid grid-flow-col p-2 h-20'>
                        <div className='grid-cols-1 flex p-4'>
                            <img className='h-8 cursor-pointer' alt="menu" src="https://icons-for-free.com/iconfiles/png/512/hamburger-1324760528048814325.png"
                                onClick={() => menuToogleHandler()} />
                            <NavLink to="/">
                            <img className='h-8' alt="logo" src="https://freepngimg.com/thumb/youtube/77791-logo-computer-youtube-icons-download-free-image.png" />
                            </NavLink>
                        </div>
                        {
                            !xs && <div className='grid-cols-10 p-4'>

                                <div className='relative'>
                                    <form onSubmit={(e) => {
                                        e.preventDefault();
                                        if (searchedQuery.length !== 0) {
                                            navigate(`/results?search_query=${searchedQuery.split(" ").join("+")}`)
                                            setIsSuggestionOpened(false)
                                        }
                                    }}>
                                    <input
                                        className='w-2/3 border border-gray-400 bg-gray-100 p-2 rounded-l-full'
                                        type="text"
                                        placeholder='search'
                                        value={searchedQuery}
                                        onFocus={() => setIsSuggestionOpened(true)}
                                        onBlur={() => setTimeout(() => {
                                            setIsSuggestionOpened(false)
                                        },250)}
                                        onChange={(e) => setSearchedQuery(e.target.value)} />
                                    <button className='px-4 py-2 border border-gray-400 rounded-r-full border-l-0 bg-gray-50'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline">
                                            <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    </form>
                                    
                                    {
                                        isSuggestionOpened && suggestionResults.length !== 0 && <div className='absolute shadow-md bg-white py-2 w-2/3 border rounded-lg'>
                                            <ul>
                                                {suggestionResults.map((suggestionResult) => {
                                                    return  <NavLink key={suggestionResult} to={"/results?search_query=" + suggestionResult.split(" ").join("+")}>
                                                        <li className="py-1 px-3 mb-1 hover:bg-gray-100 flex items-center text-sm"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                        <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                                                    </svg>
                                                        &nbsp;
                                                        {suggestionResult}</li>
                                                        </NavLink>
                                                })}
                                            </ul>

                                        </div>
                                    }
                                </div>



                            </div>
                        }

                        <div className={`p-4 ${xs ? 'grid-cols-4' : 'grid-cols-1'}`}>
                            <div className='flex float-right px-4 items-center'>
                                {
                                    xs && <div className='cursor-pointer' onClick={() => setMobileSearchBar(prvSatate => !prvSatate)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                        </svg>
                                    </div>

                                }
                                <img className='h-6 ml-3' alt="user" src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png" />
                            </div>
                        </div>


                    </div>
            }

        </>


    )
}

export default Header