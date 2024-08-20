import React, { useContext } from "react";
import { AuthContext } from "../../store/Auth";
import './singlrtelevision.css'
import { useNavigate, useParams } from "react-router-dom";
export const SingleTelevision=()=>{
    const {television,handleCart}=useContext(AuthContext)
    const {id}=useParams()
    // const navigate=useNavigate()
    // const handleCart=()=>{
    //     navigate('/cart')
    // }
    return(
        <>
            <div id="single_tv_main_hero">
            <ul style={{listStyleType:'none'}}>
                    {television.map((curElem,index)=>
                    curElem._id===id?(
                        <div >
                            <li >
                                <div  id="container_single_television">
                                    <div id="">
                                        <ul id="photoshop_single_television">
                                            <li><img src={curElem.tv_img} id={curElem.tv_img_id}></img></li>
                                            <li><img src={curElem.tv_img} id={curElem.tv_img_id}></img></li>
                                            <li><img src={curElem.tv_img} id={curElem.tv_img_id}></img></li>
                                            <li><img src={curElem.tv_img} id={curElem.tv_img_id}></img></li>
                                        </ul>
                                    </div>
                                    <div >
                                        <img src={curElem.tv_img} id={curElem.tv_img_id} className="main_image_single_television"></img>
                                    </div>
                                    <div id="content_single_television">
                                        <div id="name_single_television">{curElem.name}</div>
                                        <div id="review_single_television">
                                        &#9734; {curElem.review}
                                        </div>
                                        <div id="price_single_television">
                                        &#8377;{curElem.price}
                                        </div>
                                        <div className="brand_single_television">
                                            {curElem.brand}
                                        </div>
                                        
                                        <p className="brand_single_television">Size</p>
                                        <div className="brand_content_single_television">
                                            {curElem.size}
                                        </div>
                                        
                                        <p className="brand_single_television">Display:</p>
                                        <div className="brand_content_single_television">
                                            {curElem.display}
                                        </div>
                                        <p className="brand_single_television">Special Features</p>
                                        <div className="brand_content_single_television">
                                            <ul>
                                            {curElem.special_features.map((i,j)=>(
                                                <li key={j}>{i}</li>
                                            ))}
                                            </ul>
                                        </div>
                                        <p className="brand_single_television"> Connectivity Technology</p>
                                        <div className="brand_content_single_television">
                                            <ul>
                                            {curElem.connectivity_technology.map((i,j)=>(
                                                <li key={j}>{i}</li>
                                            ))}
                                            </ul>
                                        </div>
                                        <p className="brand_single_television">Aspect ratio:</p>
                                        <div className="brand_content_single_television">
                                            {curElem.aspect_ratio}
                                        </div>
                                        
                                        <div>
                                            <p className="brand_single_television">Product Dimensions</p>
                                            <div className="brand_content_single_television">
                                            <ul>
                                            <li>width:{curElem.product_dimensions.width}</li>
                                                <li>height:{curElem.product_dimensions.height}</li>
                                                <li>depth:{curElem.product_dimensions.depth}</li>
                                            </ul>
                                            </div>
                                        </div>
                                        <div><button className="button_single_television" onClick={()=>handleCart("tv",curElem._id)}>Add to Cart</button></div>
                                    </div>
                                </div>
                            </li>
                        </div>
                    ):
                    null)}
                </ul>
            </div>
        </>
    )
}