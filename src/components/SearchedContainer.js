import React, {useEffect, useState} from 'react'
import { getSearchedReultsUrl } from '../utils/constant';
import { NavLink, useSearchParams } from 'react-router-dom';
import ResultsCard from './ResultsCard';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';

const SearchedContainer = () => {
    const [searchedResults, setSearchedResults] = useState([])
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    console.log(searchParams.get("search_query"));
    const getSearchedReults = async () => {
        try{
          const data = await fetch(getSearchedReultsUrl(searchParams.get("search_query")));
          const json = await data.json();
          setSearchedResults(json?.items)
        }catch(error){
            console.log(error)
        }
    }
    useEffect(() => {
        dispatch(closeMenu())
        getSearchedReults();
    },[searchParams.get("search_query")])
  return (
   <div className='h-[88vh] overflow-y-auto'>
    <div className={`container mx-auto p-4`}>
    {searchedResults?.length !== 0 && searchedResults.map((searchedResult) => {
       return  searchedResult?.id?.channelId?<div className='flex justify-center mb-10 border-b-[1px] pb-5'>
       <img className="mr-2 w-52 rounded-full" alt="thumbnail" src={searchedResult.snippet?.thumbnails?.high?.url} />
       <div>
           <h1 className='font-bold line-clamp-2 text-sm'>{searchedResult?.snippet?.title}</h1>
           <h1 className='text-xs text-gray-500'>{searchedResult?.snippet?.channelTitle}</h1>
       </div>
       </div>: <NavLink to={'/watch?v=' + searchedResult?.id?.videoId}>
            <ResultsCard key={searchedResult.etag} info={searchedResult}/>
        </NavLink>
    })}
    </div>
   
   </div>
  )
}

export default SearchedContainer