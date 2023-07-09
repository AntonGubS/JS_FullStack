import {useEffect, useRef} from "react";

export const useObserver =(ref,canLaod,isLoading, callback)=>{
    const  observer =useRef();
    useEffect( ()=>{
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();
        var cb = function (entries,observer){
            if (entries[0].isIntersecting && canLaod){
                callback()
            }
        }
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current)
    }, [isLoading])
}