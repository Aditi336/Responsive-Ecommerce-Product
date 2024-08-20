import React, { useContext, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import '../css/navbar.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

import { NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { SidebarData } from "./Sidebar";
import { AuthContext } from "../store/Auth";
// import {}
export const Navbar=()=>{
    const navigate=useNavigate()
    const {isLoggedIn,user,count}=useContext(AuthContext)
    const handleLogin=()=>{
        navigate('/login')
    }
    const handleCart=()=>{
        navigate('/cart')
    }
    const handleLogout=()=>{
        navigate('/logout')
    }
    const [sidebar,setsidebar]=useState(false)
    const showSidebar=()=>{
        setsidebar(!sidebar)
    }
    const [sticky,setSticky]=useState(false)
    useEffect(()=>{
        const handleScroll=()=>{
            setSticky(window.scrollY>100)
        }
        window.addEventListener('scroll',handleScroll)
        return()=>window.removeEventListener('scroll',handleScroll)
    })

    return(
        <>
            <nav  className={`${sticky ? 'navbar' : 'non-sticky'}`} /*id="non-sticky" */>
                <div id="navbar_list_div_hero">
                <ol id="navbar_list_ol">
                    <li>
                        <div id="navbar_hamburger">
                            <GiHamburgerMenu onClick={showSidebar}/>
                        </div>
                        <section>
                            <nav className={sidebar?'nav-menu active':'nav-menu'}>
                                <ul className="nav-menu-items" onClick={showSidebar}>
                                    <li className="navbar-toggle">
                                        <NavLink to="#" className="menu-bars">
                                        <AiOutlineCloseCircle  id="navbar-close"/>
                                        {isLoggedIn?(<div id="navbar_username">Welcome {user.username}</div>):(<div id="navbar_username">Welcome user</div>)}
                                        
                                        
                                        </NavLink>
                                    </li>
                                    <div id="nav-contents">
                                        {SidebarData.map((item,index)=>{
                                            return(
                                                <li key={index} className={item.cName}>
                                                    <NavLink to={item.path} >
                                                        {item.icon}
                                                        <span>{item.title}</span>
                                                    </NavLink>
                                                </li>
                                            )
                                        })}
                                    </div>
                                </ul>
                            </nav>

                        </section>
                    </li>
                    <li>
                        <div>
                            <div id="logo_navbar"></div>
                        </div>
                    </li>
                    {isLoggedIn?(
                        <li>
                        <div onClick={handleLogout} style={{cursor:'pointer'}} id="navbar_login">
                            Logout
                        </div>
                    </li>
                    ):
                    (<li>
                        <div onClick={handleLogin} style={{cursor:'pointer'}} id="navbar_login">
                            Login
                        </div>
                    </li>)}
                    
                    <li>
                        <div onClick={handleCart} id="navbar_cart">
                        <div id="cart_count_keeping">{count}</div>
                        <FaShoppingCart id="logo_of_cart_home" />
                        </div>
                    </li>
                </ol>
                </div>
            
        </nav>
            
        </>
    )
}