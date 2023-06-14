import { useEffect, useState } from 'react'

const useMedia = (media) => {
    const [isMatchMedia, setIsMatchMedia] = useState(false)
    useEffect(() => {
        const myFunction = (x) => {
            if (x.matches) { // If media query matches
                setIsMatchMedia(true);
            } else {
                setIsMatchMedia(false);
            }
        }

        let x = window.matchMedia(`${media}`)
        myFunction(x) // Call listener function at run time

        x.addEventListener("change", myFunction);

        return () => {
            x.removeEventListener("change", myFunction)
        }

    }, [])
    return isMatchMedia;
}

export default useMedia;