import React, { useContext, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../css/home.css';
import { useNavigate } from "react-router-dom";
// import required modules
import { EffectFade,Autoplay, Navigation, Pagination } from 'swiper/modules';
import { AuthContext } from '../store/Auth';
import { Sample } from './Sample';

export const Home=()=> {
    const navigate=useNavigate()
    const {user}=useContext(AuthContext)
    const handleMobile=()=>{
        navigate('/mobile')
    }
    const handleTelevision=()=>{
      console.log('Navigating to TV Page');
      navigate("/tv")
    }
    const handleMeshirt=()=>{
      navigate("/mensshirt")
    }
    const handleWomenfrock=()=>{
      navigate("/womenfrock")
    }
    const handleNavbar=(type)=>{
      if(type==='home')
      {
          navigate("/")
      }
      else if(type==='mobile')
          {
              navigate("/mobile")
          }
      else if(type==='tv')
          {
              navigate("/tv")
          }
      else if(type==='menshirt')
          {
              navigate("/mensshirt")
          }
      else if(type==='womenfrock')
          {
              navigate("/womenfrock")
          }
  }
  return (
    <>
    {/* <p>user{user.username}</p>
    <p>id:{user._id}</p> */}
    <div className="w-full mb-[3em] mt-24 bg-white text-black py-3 px-2 inline-flex justify-between items-center" id="section_footer">
    <div className="max-w-[1640px] mx-auto inline-flex justify-between items-center border-b-2 border-gray-600 py-8">

    <ul id="another_navbar_ul">
                        <li onClick={()=>handleNavbar("home")} >Home</li>
                        <li onClick={()=>handleNavbar("mobile")}>Mobile</li>
                        <li onClick={()=>handleNavbar("tv")}>TV</li>
                        <li onClick={()=>handleNavbar("menshirt")}>Men shirts</li>
                        <li onClick={()=>handleNavbar("womenfrock")}>Women frocks</li>
                    </ul>
                </div>
            </div>
    <Sample/>
    <div id="navbar_shopping_list_div">
                <ol id="navbar_shopping_list">
                    <li>
                        <div id="navbar_mobile" onClick={handleMobile}>
                        <img   src="https://img.icons8.com/?size=100&id=ZyhUMtWF0JuL&format=png&color=000000"></img>
                        <p id="navbar_mobile_text">Mobile</p>
                        </div>
                    </li>
                    <li>
                        <div id="navbar_mobile" onClick={handleTelevision}>
                        <img  id="navbar_tv" src="https://img.icons8.com/?size=100&id=hR36FNBgrSwz&format=png&color=000000"></img>
                        <p id="navbar_mobile_text">TV</p>

                        </div>
                    </li>
                    <li>
                        <div id="navbar_mobile" onClick={handleMeshirt}>
                        <img src="https://img.icons8.com/?size=100&id=bpVFwH7iqfvq&format=png&color=000000"></img>
                        <p id="navbar_mobile_text">Men</p>

                        </div>
                    </li>
                    <li>
                        <div id="navbar_mobile" onClick={handleWomenfrock}>
                        <img src="https://img.icons8.com/?size=100&id=02tTccPxERvB&format=png&color=000000"></img>
                        <p id="navbar_mobile_text">Women</p>

                        </div>
                    </li>
                </ol>
            </div>
          
            <div>
            

            </div>
      
      

    </>
  );
}
