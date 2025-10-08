import gsap from "gsap";
import { useEffect, useRef, useState } from "react";


export default function Preloader({children}){

    const [isReady, setIsReady] = useState(false);
    const loaderRef = useRef(null);

    useEffect(()=> {
        // helper
        //  detect when all assets are done
        const handleAssetLoaded = ()=> {
            // 
            // fade out loader
                gsap.to(loaderRef.current, {
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    onComplete: ()=> setIsReady(true),

                })
        }

        // add listener
        window.addEventListener('load', handleAssetLoaded);


        // data loading simulation



    }, [])


    return(
        <div>

        </div>
    )
}