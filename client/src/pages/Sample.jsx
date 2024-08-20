import React, { useEffect, useState } from "react";
import "../css/sample.css";
import { MockData } from "./ModelData";
import {motion,AnimatePresence,easeInOut} from 'framer-motion'
import { SlideRight } from "./utility/animation";

export const Sample=()=>{
    const [activeData,setActiveData]=useState(MockData[0])
    const [currentIndex,setcurrentIndex]=useState(0)

    useEffect(()=>{
        const interval=setInterval(()=>{
            setcurrentIndex((prevIndex)=>(prevIndex+1)%MockData.length)
        },3000)

        return()=>clearInterval(interval)
    },[currentIndex])

    useEffect(()=>{
        setActiveData(MockData[currentIndex])
    },[currentIndex])

    return(
        <>
            <motion.section 
            id="sample_section"
            initial={{backgroundImage:`radial-gradient(circle,${activeData.backgrd_color}
            0%, ${activeData.backgrd_color} 0%)`
            }}
            key={activeData.id}
            animate={{
                backgroundImage:`radial-gradient(circle, ${activeData.backgrd_color}aa
                0%,${activeData.backgrd_color}70%)`
            }}
            transition={{duration:0.2,ease:easeInOut}}
            className="text-black">
                <div className="container grid grid-cols-1 md:grid-cols-2
                h-screen md:h-[700px] relative">
                    <div className="flex flex-col justify-center py-14 md:py-0
                    xl:max-w-[500px] order-2 md:order-1">
                        <div className="space-y-5 md:space-y-7 text-center
                        md:text-left">
                        <AnimatePresence mode="wait">
                            <motion.h1
                            id="h1_sample_hero"
                            key={activeData.id}
                            variants={SlideRight(0.2)}
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            className="text-7xl lg:text-4xl xl:text-5xl font-bold">
                            {activeData.title}

                            </motion.h1>
                        </AnimatePresence>
                        <AnimatePresence mode="wait">
                            <motion.p 
                            key={activeData.id}
                            variants={SlideRight(0.6)}
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            className="text-black/80 text-3xl text-sm leading-loose ">
                                {activeData.description}
                            </motion.p>
                        </AnimatePresence>
                        </div>
                    </div>
                        <div className="flex flex-col items-center justify-center order-1
                        md:order-2 relative">
                            <AnimatePresence mode="wait">
                            <motion.img 
                            key={activeData.id}
                            initial={{opacity:0,x:100}}
                            animate={{opacity:1,x:0}}
                            transition={{duration:0.4,ease:easeInOut,delay:0}}
                            exit={{opacity:0,x:100}}
                            src={activeData.src} 
                            alt="" 
                            className="w-[300px] md:w-[400px] xl:w-[500px] relative z-10"/>
                            </AnimatePresence>
                        </div>
                </div>
            </motion.section>

        </>
    )
}