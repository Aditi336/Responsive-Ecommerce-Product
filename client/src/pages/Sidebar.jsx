import React from "react";
import { FaHome } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import { IoLogIn } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { FaMobile } from "react-icons/fa";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { FaShirt } from "react-icons/fa6";
import { GiLargeDress } from "react-icons/gi";
export const SidebarData=[
    {
        title:'Home',
        path:'/',
        icon:<FaHome />,
        cName:'nav-text'

    },
    {
        title:'Register',
        path:'/register',
        icon:<GiArchiveRegister />,
        cName:'nav-text'
    },
    {
        title:'Login',
        path:'/login',
        icon:<IoLogIn />,
        cName:'nav-text'
    },
    {
        title:'Logout',
        path:'/logout',
        icon:<IoLogOut />,
        cName:'nav-text'
    },
    {
        title:'Mobile',
        path:'/mobile',
        icon:<FaMobile />,
        cName:'nav-text'
    },
    {
        title:'TV',
        path:'/tv',
        icon:<PiTelevisionSimpleFill />,
        cName:'nav-text'
    },
    {
        title:'Men shirt',
        path:'/mensshirt',
        icon:<FaShirt />,
        cName:'nav-text'
    },
    {
        title:'Women frocks',
        path:'/womenfrock',
        icon:<GiLargeDress />,
        cName:'nav-text'
    },

]