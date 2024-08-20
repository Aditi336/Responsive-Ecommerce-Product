import React, { useContext } from "react";
import { AuthContext } from "../../store/Auth";
import { useNavigate } from "react-router-dom";
import './menshirts.css'
export const Menshirts=()=>{
    const {MenShirt,rating_mob,sizes_shirt,color_men_shirt,fabric_men_shirt}=useContext(AuthContext)
    const navigate=useNavigate()
    const handleSingleShirt=(item)=>{
        window.open(`/detailsmenshirt/${item._id}`)
    }

    const filterMenShirt=MenShirt.filter((curElem)=>{
        const sizefilter=curElem.types_of_sizes.some(size => sizes_shirt.includes(size))
        const ratingfilter=rating_mob.includes(curElem.review_id.toLowerCase())
        const colorfilter=curElem.types_of_color.some(color=>color_men_shirt.includes(color))
        const fabricfilter=curElem.name_of_fabric && fabric_men_shirt.includes(curElem.name_of_fabric.toLowerCase())
        return ratingfilter || sizefilter  || colorfilter ||fabricfilter
    })
    const displayFilter=filterMenShirt.length>0?filterMenShirt:MenShirt

    

    return(
        <>
            <div>
                <div>
                    <ul id="ul_container_menshirt">
                    {displayFilter.map((curElem,index)=>(
                        <div onClick={()=>handleSingleShirt(curElem)} style={{cursor:'pointer'}} >
                            <li key={index} id="men_shirt_container">
                                <div>
                                    <img src={curElem.img_men} id="main_img_men"/>
                                </div>
                                <div id="content_men_shirt">
                                    <div id="name_of_dress_menshirt">
                                        {curElem.name_of_dress}
                                    </div>
                                    <div id="brand_name_menshirt">
                                    {curElem.brand_name}
                                    </div>
                                    <div>
                                        <ul id="color_palate_ul_menshirt">
                                            {curElem.types_of_color.map((i,j)=>(
                                                <span key={j} id="color_palatee_menshirt" style={{backgroundColor:i}}></span>
                                            ))}
                                        </ul>
                                    </div>
                                    <div id="review_television">
                                    &#9734;{curElem.review}
                                    </div>
                                    <div id="price_men_shirt">
                                    &#8377;{curElem.price}
                                    </div>
                                    <div style={{color:curElem.isActive?'green':'red'}} id="isActive_menshirt">
                                        {curElem.isActive?`available`:'out of stock'}
                                    </div>
                                    
                                </div>
                            </li>
                        </div>
                    ))}
                        
                    </ul>
                </div>
            </div>
        </>
    )
}