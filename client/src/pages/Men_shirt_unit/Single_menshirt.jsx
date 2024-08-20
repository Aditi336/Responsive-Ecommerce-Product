import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../store/Auth";
import "./single_menshirt.css"
export const Single_menshirts=()=>{
    const {id}=useParams()
    // console.log("id",id)
    const {MenShirt,dresshandleCart}=useContext(AuthContext)
    let i,j,name_1,img_1,_id_1
    if(MenShirt.length>0){
        const curElem=MenShirt.find(curElem=>curElem._id===id)
        name_1=curElem.name_of_dress
        _id_1=curElem._id
        i=curElem.types_of_sizes[0]
        j=curElem.types_of_color[0]
        img_1=curElem.img_men
    }
    console.log("types of color and sizes",i,j)
    const [menshirt_cart,setmenshirt_cart]=useState({
        name: name_1,
        _id: _id_1,
        img_menshirt: img_1,
        color: i,
        size: j,
        price: 0,
        amount: 1
      })
    const addStyleborder=(i,type)=>{
        if(type==='size' && selectedSize===i)
        {
            return {border:'4px solid black'}
        }
        if(type==='color' && selectedColor===i)
        {
            return {border:'4px solid black'}
        }
        return {}
    }
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const handleSize = (size) => {
        setSelectedSize(size);
      }
    
      const handleColor=(color)=>{
        setSelectedColor(color)
      }
    useEffect(()=>{
        const selectedShirt = MenShirt.find(curElem=>curElem._id===id)

       if(selectedShirt)
       {
        setmenshirt_cart(prevState=>{
            if(prevState.color!==selectedColor || prevState.size!==selectedSize)
            {
                return{
                name:selectedShirt.name_of_dress,
                _id:selectedShirt._id,
                img_menshirt:selectedShirt.img_men,
                color:selectedColor||j,
                size:selectedSize||i,
                price:selectedShirt.price,
                amount:1
                }
            }
            return prevState
        })
       }
       
    },[selectedSize,selectedColor,id,MenShirt])
    console.log("cart mne",menshirt_cart)
    return(
        <>
            <div>
                <div id="single_menshirt_main_hero">
                    <ul style={{listStyleType:'none'}}>
                    {MenShirt.map((curElem,index)=>
                        curElem._id===id?(
                        <div >
                            <li key={index}>
                            <div id="container_single_menshirt">
                                <div>
                                    <ul id="ul_photo_single_menshirt">
                                        <li ><img src={curElem.img_men} className="li_photo_single_menshirt"/></li>
                                        <li ><img src={curElem.img_men} className="li_photo_single_menshirt"/></li>
                                        <li ><img src={curElem.img_men} className="li_photo_single_menshirt"/></li>
                                        <li ><img src={curElem.img_men} className="li_photo_single_menshirt"/></li>

                                    </ul>

                                </div>
                                <div>
                                    <img className="main_image_men_shirt" src={curElem.img_men}/>
                                </div>
                                <div id="contents_single_menshirt">
                                        <div id="name_single_menshirt">
                                        {curElem.brand_name}'s {curElem.name_of_dress}
                                        </div>
                                        <div id="review_single_menshirt">
                                        &#9734;{curElem.review}
                                        </div>
                                        <div id="price_single_menshirt">
                                        &#8377;{curElem.price}
                                        </div>
                                        <div >
                                        <p className="options_single_menshirt">Sizes:</p>
                                        <div id="div_butons_single_menshirt">
                                            <ul>
                                                {curElem.types_of_sizes.map((i,j)=>(
                                                    <button className="size_single_menshirt" onClick={()=>handleSize(i)} style={addStyleborder(i,"size")} key={j}>{i}</button>
                                                    
                                                ))}
                                            </ul>
                                            </div>
                                        </div>
                                        <div>
                                        <p className="options_single_menshirt">Colours:</p> 
                                        <div id="div_butons_single_menshirt">                                      
                                        <ul>
                                                {curElem.types_of_color.map((i,j)=>(
                                                    <button key={j} className="color_plalate_single_menshirt" onClick={()=>handleColor(i)} style={{...addStyleborder(i,"color"),backgroundColor:i}}></button>
                                                ))}
                                            </ul>
                                            </div> 
                                        </div>
                                        <p className="brand_heading_single_menshirt">Seller:</p>
                                        <div className="brand_single_menshirt">
                                            {curElem.seller_name}
                                        </div>
                                        <p className="brand_heading_single_menshirt">Fabrix:</p>
                                        <div className="brand_single_menshirt">
                                           {curElem.name_of_fabric}
                                        </div>
                                        <div  className="online_single_menshirt" style={{color:curElem.isActive?'green':'red'}}>
                                            {curElem.isActive?`available`:'out of stock'}
                                        </div>
                                        <div className="div_button_single_menshirt">
                                            <button className="button_single_menshirt" disabled={!curElem.isActive} onClick={()=>dresshandleCart("menshirt",menshirt_cart)}>Add to cart</button>
                                        </div>
                                    </div>
                            </div>
                            </li>
                        </div>
                    ):
                    null)}
                        
                    </ul>
                </div>
                
            </div>
        </>
    )
}