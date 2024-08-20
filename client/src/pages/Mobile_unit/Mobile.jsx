import React, { useContext } from "react";
import { AuthContext } from "../../store/Auth";
import '../../css/mobile.css'
import { useNavigate } from "react-router-dom";
                    {/* .filter((curElem)=>{Brand_mob===''?curElem:Brand_mob.includes(curElem.brand.toLowerCase()) }) */}

export const Mobiles = () => {
    const navigate=useNavigate()
    const { Mobile,Brand_mob,rating_mob} = useContext(AuthContext);
    const handleMobileDetails=(single)=>{
        window.open(`/detailsmobileitem/${single._id}`)
    }

    
    
    const filterMobile=Mobile.filter((curElem)=>
        {
            const brandfiler=Brand_mob.includes(curElem.brand.toLowerCase()) 
            const ratingfilter=rating_mob.includes(curElem.availability.review_id)

            return brandfiler || ratingfilter
    }
    )
    const displayMobile=filterMobile.length>0?filterMobile:Mobile
    return (
        <>
            <div>
                {/* search bar */}
            </div>
            <div>
                <ul id="mobile_list_ul">
                    {displayMobile
                    .map((curElem, index) => (
                        <div id="mobile_ul_li">
                        <li >
                            <div id="mobile_div_container" >
                                <div>
                                    <img src={curElem.img_brand} id={curElem.img_brand_id} 
                                    className="mobile_img"
                                    ></img>
                                </div>
                                <div>
                                    <div id="brand_name_id" onClick={()=>{handleMobileDetails(curElem)}}>{curElem.brand} {curElem.model}</div>
                                    <div id="avail_review">&#9734;{curElem.availability.review }</div>

                                    <div>
                                        <p id="display_head">Display:</p>
                                        <div id="display_id">
                                        <p>Size: {curElem.specs.display.size}</p>
                                        <p>Resolution: {curElem.specs.display.resolution}</p>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div id="price_avail_id">
                                        
                                        <p id="price_id"> &#8377;{curElem.price}</p>
                                        <div>
                                            <p id="display_head">Availability:</p>
                                            <div id="avaliability_id">
                                            <p id="avail_online" style={{color:curElem.availability.online?'green':'red'}}>{curElem.availability.online ? "Online" : "Out of Stock"}</p>
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
    );
};
