import React from "react";
import { useEffect,useState } from "react";
export default function BackToTopButton(){
    const [backtotop,setbacktotop]=useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if (window.scrollY>100)
            {
                setbacktotop(true)
            }
            else{
                setbacktotop(false)
            }
        })
    },[])
    const scrollup=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
    return(

        <>        
        {backtotop && (
            <button onClick={scrollup} style={{
                position:"fixed",
                bottom:"50px",
                right:"50px",
                height:"50px",
                width:"50px",
                fontSize:"33px",
                padding:"1px"
            }}>
             &#8593;
            </button>
        )}
        </>

    )
}
 