import React, { useContext, useState } from "react";
import { AuthContext } from "../../store/Auth";
import { useNavigate } from "react-router-dom";
import './televisions.css'

export const Television=()=>{
    const {television,brand_tv,rating_mob,sizetv    }=useContext(AuthContext)
    const navigate=useNavigate()
    const handleSingleTelevision=(id)=>{
        window.open(`/detailstelevisionitem/${id}`)

    }
    // const sizefilter=television.filter((curElem)=>{
    //     const number = parseInt(curElem.size.split(" ")[0]);
    //     // console.log(number,sizetv)
    //     // console.log("Parsed ranges:", sizetv.map(range => range.replace(" inches","").split('-').map(Number)));
    //     return sizetv.some((range)=>{
    //         const [min,max]=range.replace(" inches","").split('-').map(Number)
    //         // console.log(`Checking if ${number} is between ${min} and ${max}`);
    //         return number>=min && number<=max
    //     })
    // })

    // console.log("final",sizefilter)

    const FilterTv=television.filter((curElem)=>{
        const brandfilter=brand_tv.includes(curElem.brand.toLowerCase())
        const ratingfilter=rating_mob.includes(curElem.review_id.toLowerCase())

        const number = parseInt(curElem.size.split(" ")[0]);
        const sizefilter=sizetv.some((range)=>{
            const [min,max]=range.replace(" inches","").split('-').map(Number)
            // console.log(`Checking if ${number} is between ${min} and ${max}`);
            return number>=min && number<=max
        })
        return brandfilter || ratingfilter || sizefilter
    })
    const displayFilter=FilterTv.length>0?FilterTv:television
    return(
        <>
            <div>
                <ul className="ul_televisions">
                    {displayFilter.map((curElem,index)=>(
                        <div>
                            <li >
                                <div onClick={()=>handleSingleTelevision(curElem._id)} className="div_li_television">
                                    <div>
                                        <img src={curElem.tv_img} id={curElem.tv_img_id} className="img_televisions"></img>
                                        <div id="price_television">
                                        &#x20B9;{curElem.price}
                                        </div>
                                    </div>
                                    <div>
                                        {/* {curElem._id} */}
                                        <div id="name_television">{curElem.name}</div>
                                        <div id="review_television">
                                        &#9734;{curElem.review}
                                        </div>
                                        
                                        <div className="brand_television">
                                            {curElem.brand}
                                        </div>
                                        <div className="brand_television">
                                            {curElem.display} Display
                                        </div>
                                        
                                        
                                        <div className="brand_television">
                                            {curElem.aspect_ratio} Aspect ratio
                                        </div>
                                        
                                        <div id="productdimen_television">
                                            Product Dimensions
                                            <div>
                                                <li>width:{curElem.product_dimensions.width}</li>
                                                <li>height:{curElem.product_dimensions.height}</li>
                                                <li>depth:{curElem.product_dimensions.depth}</li>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </>
    )
}