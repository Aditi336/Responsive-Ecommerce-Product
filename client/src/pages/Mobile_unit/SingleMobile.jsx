import React, { useContext } from "react";
import { AuthContext } from "../../store/Auth";
import { useNavigate, useParams } from "react-router-dom";
import '../../css/singlemobile.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const SingleMobile=()=>{
    const {Mobile,handleCart}=useContext(AuthContext)
    const {id}=useParams()
    const navigate=useNavigate()
    // const handleMobileSubmit=()=>{
    //     toast.success("Success Notification !")

    //     navigate('/cart')
    // }
    return(
        <>
        <ToastContainer />
           <div id="single_mobile_main_hero">
           

                <ul id="single_mobile_list_ul">
                    {Mobile.map((curElem, index) => 
                    curElem._id===id?(
                        <div id="single_mobile_ul_li">
                        <ToastContainer />
                        <li >
                            <div id="single_mobile_div_container" >
                            
                                <div id="single_mob_photo">
                                    <li><img className="zoom_mobile_x" src={curElem.img_brand} id={curElem.img_brand_id} 
                                    ></img></li>
                                    <li><img className="zoom_mobile_y" src={curElem.img_brand} id={curElem.img_brand_id} 
                                    ></img></li><li><img className="zoom_mobile_1" src={curElem.img_brand} id={curElem.img_brand_id} 
                                    ></img></li><li><img className="zoom_mobile_x" src={curElem.img_brand} id={curElem.img_brand_id} 
                                    ></img></li>
                                </div>
                                <div>
                                    <img src={curElem.img_brand} id={curElem.img_brand_id} 
                                    className="main_mobile_image"
                                    
                                    ></img>
                                </div>
                                <div  className="mobile_contents_single">
                                    <div id="single_brand_name_id" onClick={()=>{handleMobileDetails(curElem)}}>{curElem.brand} {curElem.model}</div>
                                    <p id="single_price_id"> &#8377;{curElem.price}</p>
                                    <div id="single_avail_instore">&#9734;{curElem.availability.review }</div>
                                    <div>
                                        <p id="single_display_id_head">Display:</p>
                                        <div id="single_display_id">
                                        <p>Size: {curElem.specs.display.size}</p>
                                        <p>Resolution: {curElem.specs.display.resolution}</p>
                                        </div>
                                    </div>
                                    <p id="single_display_id_head">Processor: </p><div id="single_memory_id">{curElem.specs.processor}</div>
                                    <div>
                                        <p id="single_display_id_head">Memory:</p>
                                        <div id="single_memory_id">
                                        <p>RAM: {curElem.specs.memory.ram}</p>
                                        <p>Storage: {curElem.specs.memory.storage}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p id="single_display_id_head">Camera:</p>
                                        <div id="single_camera_id">
                                        <p>Rear: {curElem.specs.camera.rear}</p>
                                        <p>Front: {curElem.specs.camera.front}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p id="single_display_id_head">Battery:</p>
                                        <div id="single_battery_id">
                                        <p>Capacity: {curElem.specs.battery.capacity}</p>
                                        <p>Type: {curElem.specs.battery.type}</p>
                                        </div>
                                    </div>
                                    <p id="single_display_id_head">OS:</p><p id="single_memory_id"> {curElem.specs.os}</p>
                                    
                                    
                                    
                                
                                {/* <div id="single_price_avail_id"> */}
                                        <div>
                                        <p id="single_display_id_head">Connectivity:</p>
                                            <ul id="single_connectivity_ul_id">
                                                {curElem.specs.connectivity.map((connect, connectIndex) => (
                                                    <li key={connectIndex}>{connect}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        <div>
                                            <p id="single_display_id_head">Availability:</p>
                                            <div id="single_avaliability_id">
                                            <p id="avail_online"> {curElem.availability.online ? "Online" : "Out of stock"}</p>
                                            </div>
                                        </div>
                                    {/* </div> */}
                                    <div>
                            <button id="button_add_to_cart"onClick={()=>handleCart("mobile",curElem._id)}>Add to Cart</button>
                            </div>
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