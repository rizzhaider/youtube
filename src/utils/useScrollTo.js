import React, { useEffect } from 'react'

const useScrollTo = (x, y) => {
  useEffect(() => {
    window.scrollTo(x,y);
  })
}

export default useScrollTo