import {  useState } from 'react'

const useScrollTo = () => {
  const [infoData, setInfoData] = useState(null);
   const setInfoDataFn = (inputData) => {
    setInfoData(inputData);
   }
  return [infoData, setInfoDataFn];
}


export default useScrollTo;