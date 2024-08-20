import React, { useContext } from "react";
import { AuthContext } from "../store/Auth";
import '../css/cart.css'
import { useNavigate } from "react-router-dom";
export const Cart=()=>{
    const {cart,handleChange,total,handleDelete,isLoggedIn}=useContext(AuthContext)
    const navigate=useNavigate()
    const handleBuying=()=>{
        if(isLoggedIn)
        {
            navigate("/buying")
        }
        else{
            navigate("/login")
        }
    }
    return(
        <>
        <div id="whole_cart_content">
        <div id="main_cart_heading">Shopping Cart</div>

            {cart.map((curElem)=>
            curElem.type==='mobile'?(
                <ul style={{listStyleType:"none"}}>
                {curElem.items.map((items)=>(
                    <li>
                    <div id="li_container_cart">
                    <div>
                        <img id="main_img_mobile_cart" src={items.img_brand}></img>
                    </div>
                    <div>
                        <div id="heading_mobile_cart">{items.brand} {items.model}</div>
                        <p id="sub_head_mobile_cart">Size:</p>
                            <div id="content_mobile_cart">{items.specs.display.size}</div>
                        <p id="sub_head_mobile_cart">Quantity:</p>
                            <div id="content_mobile_cart">{items.amount}</div>

                        <div >
                        <button className="button_mobile_cart" onClick={()=>{handleChange(items._id,1)}}>+</button>
                        <button className="button_mobile_cart" onClick={()=>{handleChange(items._id,-1)}}>-</button>
                        <button className="button_mobile_cart" onClick={()=>handleDelete(items._id)}>Delete</button>
                        </div>
                    </div>
                    
                    <div id="price_mobile_cart">&#8377;{items.price}</div>

                    </div>
                    </li>
                    

                ))}

                </ul>
            ):null)}
            {cart.map((curElem)=>
            curElem.type==='tv'?(
                <ul style={{listStyleType:"none"}}>
                {curElem.items.map((items)=>(
                    <li>
                    <div id="li_container_cart">
                        <div>
                            <img id="main_img_cart" src={items.tv_img}></img>
                        </div>
                        <div>
                            <div id="heading_mobile_cart">{items.brand} {items.name}</div>
                            <p id="sub_head_mobile_cart">Size:</p>
                                <div id="content_mobile_cart">{items.size}</div>
                            <p id="sub_head_mobile_cart">Quantity:</p>
                                <div id="content_mobile_cart">{items.amount}</div>
                            <div>
                                <button className="button_mobile_cart" onClick={()=>{handleChange(items._id,1)}}>+</button>
                                <button className="button_mobile_cart" onClick={()=>{handleChange(items._id,-1)}}>-</button>
                                <button className="button_mobile_cart" onClick={()=>handleDelete(items._id)}>Delete</button>
                            </div>
                        </div>
                        <div id="price_mobile_cart">&#8377;{items.price}</div>

                    </div>
                    </li>
                    

                ))}

                </ul>
            ):null)}
            {cart.map((curElem)=>
            curElem.type==='menshirt'?(
                <ul style={{listStyleType:"none"}}>
                {curElem.items.map((items)=>(
                    <li>
                    <div id="li_container_cart">
                        <div>
                            <img id="main_img_cart" src={items.img_menshirt}></img>
                        </div>
                        <div>
                            <div id="heading_mobile_cart">{items.name}</div>
                            <p id="sub_head_mobile_cart">Colour:</p>
                                <div id="colours_menshirt_cart_div"><button  id="colours_menshirt_cart" style={{backgroundColor:items.color}}></button></div>
                            <p id="sub_head_mobile_cart">Size:</p>
                                <div id="content_mobile_cart">{items.size}</div>
                            <p id="sub_head_mobile_cart">Quantity:</p>
                                <div id="content_mobile_cart">{items.amount}</div>

                            <div>
                                <button className="button_mobile_cart" onClick={()=>{handleChange(items._id,1)}}>+</button>
                                <button className="button_mobile_cart" onClick={()=>{handleChange(items._id,-1)}}>-</button>
                                <button className="button_mobile_cart" onClick={()=>handleDelete(items._id)}>Delete</button>
                            </div>
                        </div>
                        <div id="price_mobile_cart">&#8377;{items.price}</div>

                    </div>
                    </li>
                    

                ))}

                </ul>
            ):null)}
            {cart.map((curElem)=>
            curElem.type==='womenfrock'?(
                <ul>
                {curElem.items.map((items)=>(
                    <li>
                    <div id="li_container_cart">
                        <div>
                            <img id="main_img_cart" src={items.img_womenshirt}></img>
                        </div>
                        <div>
                            <div id="heading_mobile_cart">{items.name}</div>
                            <p id="sub_head_mobile_cart">Colour:</p>
                                <div id="colours_menshirt_cart_div"><button  id="colours_menshirt_cart" style={{backgroundColor:items.color}}></button></div>
                            <p id="sub_head_mobile_cart">Size:</p>
                                <div id="content_mobile_cart">{items.size}</div>
                            <p id="sub_head_mobile_cart">Quantity:</p>
                                <div id="content_mobile_cart">{items.amount}</div>

                            <div>
                                <button className="button_mobile_cart" onClick={()=>{handleChange(items._id,1)}}>+</button>
                                <button className="button_mobile_cart" onClick={()=>{handleChange(items._id,-1)}}>-</button>
                                <button className="button_mobile_cart" onClick={()=>handleDelete(items._id)}>Delete</button>
                            </div>
                        </div>
                        <div id="price_mobile_cart">&#8377;{items.price}</div>

                    </div>
                    </li>
                    

                ))}

                </ul>
            ):null)}
        
            <div id="price_cart">Total:  &#8377;{total}</div>
            <div id="div_buy_cart">
                <button id="button_buy_cart" onClick={()=>handleBuying()} >Proceed to buy &rarr;</button>
            </div>
            </div>
        </>
    )
}