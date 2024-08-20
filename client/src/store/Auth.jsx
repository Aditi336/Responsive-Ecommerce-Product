import {  createContext, useEffect, useState } from "react";
import React from "react";
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
export const AuthContext=createContext()
export const AuthProvider=({children})=>{


    // user details
    const [user,setuser]=useState("")
    const [token,settoken]=useState(localStorage.getItem("token"))
    const [userId,setuserId]=useState("")
    const storetokenInLS=(serverToken,serverId)=>{
        settoken(serverToken)
        setuserId(serverId)
        // restoreCartDetails()

        return localStorage.setItem("token",serverToken)
    }
    let isLoggedIn=!!token
    console.log("is Logged in",isLoggedIn)
    const getUser=async()=>{
        try {
            const response=await fetch("http://localhost:5000/api/auth/user",{
                method:"GET",
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            if(response.ok)
            {
                const data=await response.json()
                setuser(data.userData)
                console.log("logged in person data",data.userData)
            }

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getUser()
    },[])
    // user logout section
    const LogoutUser=()=>{
        // presistCartDetails(cart)
        clearCartDetails()
        settoken("")
        setuserId("")
        return localStorage.removeItem("token")
    }
    // mobile section
    const [Mobile,setMobile]=useState([])

    // Mobile filterting according to brand
    const [Brand_mob,setBrand_mob]=useState([])
    const handleBrandFilter = (event) => {
        const {name,checked}=event.target
        const lowerCaseName = name.toLowerCase();
        setBrand_mob((prevbrand)=>checked?[...prevbrand,lowerCaseName]:prevbrand.filter((b)=>b!==lowerCaseName))
      };
    // useEffect(()=>{
    //     console.log(Brand_mob)
    // },[Brand_mob])

    // Mobile filtering according to ratings
    const [rating_mob,setRating_mob]=useState([])

    const handleRatingsFilter=(event)=>{
        const {name,checked}=event.target
        const lowerCasename=name.toLowerCase()
        setRating_mob((preRating)=>checked?[...preRating,lowerCasename]:preRating.filter((b)=>b!==lowerCasename))
    }
    // useEffect(()=>{
    //     console.log("rating",rating_mob)
    // })

    const getMobile=async()=>{
        try {
            const response=await fetch("http://localhost:5000/api/purchase_mobile/mobile",{
                method:"GET"
            })

            if(response.ok){
                const data=await response.json()
                // console.log("mobile",data)
                setMobile(data.msg)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getMobile()
    },[])


    // Television
    const [television,setTelevision]=useState([])
    const getTelevision=async()=>{
        try {
            const response=await fetch("http://localhost:5000/api/purchase_television/tv",{
                method:"GET"
            })
            if(response.ok){
                const data=await response.json()
                // console.log(data)
                setTelevision(data.msg)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getTelevision()
    },[])


    // filtering tv brands

    const [brand_tv,setbrand_tv]=useState([])
    // mobile ratings are use 
    const [sizetv,setsizetv]=useState([])
    const handleBrandFilter_tv=(event)=>{
        const {name,checked}=event.target
        console.log(name)
        const lowercase=name.toLowerCase()
        setbrand_tv((prevbrand)=>checked?[...prevbrand,lowercase]:prevbrand.filter((b)=>b!==lowercase))
        console.log("h")
    }

    const handleSizeFilter=(event)=>{
        const {name,checked}=event.target
        console.log(name)
        const lowercase=name.toLowerCase()
        setsizetv((prevbrand)=>checked?[...prevbrand,lowercase]:prevbrand.filter((b)=>b!==lowercase))
        console.log("h")
    }
    useEffect(()=>{
        console.log("brand television",brand_tv)
    },[])


    // men's wear
    const [MenShirt,setMenShirt]=useState([])

    const getMenShirt=async()=>{
        try {
            const response=await fetch("http://localhost:5000/api/purchase_menshirt/mensshirt",{
                method:"GET"
            })
            if(response.ok){
                const data=await response.json()
                setMenShirt(data.msg)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getMenShirt()
    },[])
    // Men shirt filtering
    const [sizes_shirt,setsizes_shirt]=useState([])
    const handlesize_shirt=(event)=>{
        const {name,checked}=event.target
        setsizes_shirt((prevsize)=>checked?[...prevsize,name]:prevsize.filter((b)=>b!==name))
    }

    // color filter for men
    const [color_men_shirt,setcolor_men_shirt]=useState([])
    const colors_menshirt=['red','orange','grey','white','black','yellow','brown','blue','lightblue','olive','pink','beige','purple']
    const handlecolor_men_shirt=(name)=>{
        setcolor_men_shirt((prevcolor)=>prevcolor.includes(name)?prevcolor.filter((b)=>b!==name):[...prevcolor,name])
        console.log(color_men_shirt)

    }
    const addStyletoColorPalatee=(color)=>{
        return color_men_shirt.includes(color)?{backgroundColor:color,border:'2px solid green'}:{backgroundColor:color}
    }
    // fabric filter for men
    const [fabric_men_shirt,setfabric_men_shirt]=useState([])
    const handlefabric_men_shirt=(event)=>{
        const {name,checked}=event.target
        setfabric_men_shirt((prevfabric)=>checked?[...prevfabric,name]:prevfabric.filter((b)=>b!==name))

        

    }
    // womenfrock

    const [WomenFrock,setWomenFrock]=useState([])

    const getWomenFrock=async()=>{
        try {
            const response=await fetch("http://localhost:5000/api/purchase_womenfrock/womenfrock",{
                method:"GET"
            })
            if(response.ok)
            {
                const data=await response.json()
                setWomenFrock(data.msg)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getWomenFrock()
    },[])
   


    // cart

    const [count,setcount]=useState(0)
    const [cart,setCart]=useState(()=>{
        const savedcart=localStorage.getItem('cart');
        return savedcart?JSON.parse(savedcart):[]
    })
    const handleCart = (typeName, id) => {
        let newitem;
        if(typeName=='mobile'){
            newitem=Mobile.find((curElem)=>curElem._id===id)
            console.log(newitem)
        }
        else if(typeName=='tv'){
            newitem=television.find((curElem)=>curElem._id===id)
        }
        
        // else if(typeName=='womenfrock'){
        //     newitem=WomenFrock.find((curElem)=>curElem._id===id)
        // }

        if(newitem)
            {
                console.log("newwst items mobile",newitem)

                setCart((prevcart)=>{
                    const cartType=prevcart.find(curElem=>curElem.type===typeName)
        
                    if(cartType)
                    {
                        return prevcart.map(curElem=>
                            curElem.type===typeName?
                            {...curElem,
                                items:curElem.items.some(item=>item._id===newitem._id)?
                                curElem.items.map(item=>
                                    item._id===newitem._id?
                                    {...item,amount:item.amount+1}
                                    :
                                    item
                                )
                                :
                                [...curElem.items,{...newitem,amount:1}]
                                
                                
                            }
                            :
                            curElem
                        )
                    }
                    else
                    {
                        return [...prevcart,{type:typeName,items:[newitem]}]
                    }
                })
                toast.success("Added to cart")
            }

    }
    const dresshandleCart=(typeName,details)=>{
        let newitem;
        if(typeName==='menshirt')
        {
            newitem=details
        }
        else if(typeName==='womenfrock')
        {
            newitem=details
        }
        if(newitem){
            console.log("newwst items",newitem)

            setCart((prevcart)=>{
                const cartType=prevcart.find(curElem=>curElem.type===typeName)

                if(cartType)
                {
                    return prevcart.map(curElem=>
                        curElem.type===typeName?
                        {...curElem,
                            items: curElem.items.some(item => item._id === newitem._id)
                            ? curElem.items.map(item =>
                                item._id === newitem._id
                                ? { ...item, amount: item.amount + 1 }
                                : item
                            )
                            : [...curElem.items, { ...newitem, amount: 1 }]
                        }
                        :
                        curElem
                    )
                }
                else
                {
                    return[...prevcart,{type:typeName,items:[newitem]}]
                }
            })
            toast.success("Added to cart")

        }
    }
    let i=0
    const handleCount_cart=()=>{
        cart.map((u)=>{
            i=i+u.items.length
        })
        setcount(i)
    }
    useEffect(()=>{
        handleCount_cart()
        localStorage.setItem("cart",JSON.stringify(cart))
    },[cart])
    useEffect(() => {
        const handleStorageChange = (e) => {
          if (e.key === 'cart') {
            setCart(JSON.parse(e.newValue));
          }
        };
        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
      }, []);

    const [total,settotal]=useState("")
    const handleChange=(id,d)=>{



        setCart((prevcart)=>{
            return prevcart.map((curElem)=>{
                if(curElem.type==='mobile')
                {
                    return{
                        ...curElem,
                        items:curElem.items.map(items=>{
                            if(items._id===id)
                            {
                                return{
                                    ...items,
                                    amount:Math.max(items.amount+d,1)
                                }
                               
                            }
                            return items
                        })
                    }
                }
                if(curElem.type==='tv')
                    {
                        return{
                            ...curElem,
                            items:curElem.items.map(items=>{
                                if(items._id===id)
                                {
                                    return{
                                        ...items,
                                        amount:Math.max(items.amount+d,1)
                                    }
                                   
                                }
                                return items
                            })
                        }
                    }
                if(curElem.type==='menshirt')
                {
                    return{
                        ...curElem,
                        items:curElem.items.map(items=>{
                            if(items._id===id)
                            {
                                return{
                                    ...items,
                                    amount:Math.max(items.amount+d,1)
                                }
                            }
                            return items
                        })
                    }
                }
                if(curElem.type==='womenfrock')
                    {
                        return{
                            ...curElem,
                            items:curElem.items.map(items=>{
                                if(items._id===id)
                                {
                                    return{
                                        ...items,
                                        amount:Math.max(items.amount+d,1)
                                    }
                                }
                                return items
                            })
                        }
                    }
                return curElem

            })
        })
        

    }

    function formatIndiaNumbers(num)
    {
        let [integer,decimal]=num.toString().split('.')
        let lastThreeDigits=integer.slice(-3)
        let otherDigits=integer.slice(0,-3)

        if(otherDigits!==' ')
        {
            lastThreeDigits=','+lastThreeDigits
        }
        let formattedInteger=otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ',')+lastThreeDigits
        let formattedNumber = decimal ? formattedInteger + '.' + decimal : formattedInteger;
    
        return formattedNumber;
    }

    const handlePrice=()=>{
        let ans=0
        cart.forEach((i)=>{
            if(i.type==='mobile'|| i.type==='tv' || i.type==='menshirt'|| i.type==='womenfrock')
            {
                i.items.forEach((j)=>{
                ans+=j.price*j.amount

            })
            }
           
        })
        let resultToFixed = parseFloat(ans.toFixed(2));
        let new_ans=formatIndiaNumbers(resultToFixed)
        console.log(ans)
        settotal(new_ans)
    }
    useEffect(()=>{
        console.log("updated",cart)
        handlePrice()
    },[cart])


    const handleDelete=(id)=>{
        const new_cart=cart.map((curElem)=>{
            if(curElem.type==='mobile')
            {
                return{
                    ...curElem,
                    items:curElem.items.filter((i)=>
                        i._id!==id)
            
                }
            }
            if(curElem.type==='tv')
                {
                    return{
                        ...curElem,
                        items:curElem.items.filter((i)=>
                            i._id!==id)
                
                    }
                }
            if(curElem.type==='menshirt')
            {
                return{
                    ...curElem,
                    items:curElem.items.filter((i)=>
                    i._id!==id)
                }
            }
            if(curElem.type==='womenfrock')
                {
                    return{
                        ...curElem,
                        items:curElem.items.filter((i)=>
                        i._id!==id)
                    }
                }
            return curElem

        })
        setCart(new_cart)
    }

    const clearCartDetails=()=>{
        setCart([])
    }
    
    const constantValues={
     user,
     token,
     storetokenInLS,
     isLoggedIn,
     LogoutUser,
     Mobile,
     Brand_mob,
     rating_mob,
     handleBrandFilter,
     handleRatingsFilter,
     television,
     brand_tv,
     handleBrandFilter_tv,
     sizetv,
     handleSizeFilter,
     MenShirt,
     sizes_shirt,
     colors_menshirt,
     handlesize_shirt,
     color_men_shirt,
     addStyletoColorPalatee,
     handlecolor_men_shirt,
     fabric_men_shirt,
     handlefabric_men_shirt,
     WomenFrock,
     cart,
     count,
     handleCart,
     dresshandleCart,
     handleChange,
     handleDelete,
     total
    }

    return(
        <AuthContext.Provider value={constantValues}>
            {children}
        </AuthContext.Provider>
    )
}