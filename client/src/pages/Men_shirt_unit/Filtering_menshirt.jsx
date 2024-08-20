import React, { useContext, useState } from "react";
import { AuthContext } from "../../store/Auth";
import './filter_men.css'
export const Filtering_menshirt=()=>{
    const {rating_mob,handleRatingsFilter,sizes_shirt,handlesize_shirt,colors_menshirt,fabric_men_shirt,handlecolor_men_shirt,handlefabric_men_shirt,addStyletoColorPalatee}=useContext(AuthContext)
    const sizes_menshirt=[]
    // name of fabric denimcottonpolyester,silk,,isActive
    return(
        <>
        <div id="container_filter_menshirt">
                <div className="heading_filter_menshirt">Sizes</div>
                    <ul className="heading_filter_menshirt_ul">
                        <li>
                        <label htmlFor="apple_filtermob_id"  className="label_filter_menshirt">
                        <input
                        type="checkbox"
                        id="XXL"
                        name="XXL"
                        checked={sizes_shirt.includes('XXL')}
                        onChange={(e)=>handlesize_shirt(e)}
                        className="checkbox_filter_men_shirt"
                        
                        />
                        XXL
                        </label>
                        </li>
                        <li>
                        <label htmlFor="apple_filtermob_id"  className="label_filter_menshirt">
                        <input
                        type="checkbox"
                        id="XL"
                        name="XL"
                        checked={sizes_shirt.includes('XL')}
                        onChange={(e)=>handlesize_shirt(e)}
                        className="checkbox_filter_men_shirt"
                        
                        />
                        XL
                        </label>
                        </li>
                        <li>
                        <label htmlFor="apple_filtermob_id"  className="label_filter_menshirt">
                        <input
                        type="checkbox"
                        id="L"
                        name="L"
                        checked={sizes_shirt.includes('L')}
                        onChange={(e)=>handlesize_shirt(e)}
                        className="checkbox_filter_men_shirt"
                        
                        />
                        L
                        </label>
                        </li>
                        <li>
                        <label htmlFor="apple_filtermob_id"  className="label_filter_menshirt">
                        <input
                        type="checkbox"
                        id="M"
                        name="M"
                        checked={sizes_shirt.includes('M')}
                        onChange={(e)=>handlesize_shirt(e)}
                        className="checkbox_filter_men_shirt"
                        
                        />
                        M
                        </label>
                        </li>
                        <li>
                        <label htmlFor="apple_filtermob_id"  className="label_filter_menshirt">
                        <input
                        type="checkbox"
                        id="S"
                        name="S"
                        checked={sizes_shirt.includes('S')}
                        onChange={(e)=>handlesize_shirt(e)}
                        className="checkbox_filter_men_shirt"
                        
                        />
                        S
                        </label>
                        </li>
                        <li>
                        <label htmlFor="apple_filtermob_id"  className="label_filter_menshirt">
                        <input
                        type="checkbox"
                        id="XS"
                        name="XS"
                        checked={sizes_shirt.includes('XS')}
                        onChange={(e)=>handlesize_shirt(e)}
                        className="checkbox_filter_men_shirt"
                        
                        />
                        XS
                        </label>
                        </li>
                    </ul>
                <div className="heading_filter_menshirt">Rating</div>
                    <ul className="heading_filter_menshirt_ul">
                        <li>
                        <label htmlFor="apple_filtermob_id"  className="label_filter_menshirt">
                        <input
                        type="checkbox"
                        id="5"
                        name="5"
                        checked={rating_mob.includes('5')}
                        onChange={(e)=>handleRatingsFilter(e)}
                        className="checkbox_filter_men_shirt"
                        
                        />
                        5&#9734;
                        </label>
                        </li>
                        <li>
                        <label htmlFor="apple_filtermob_id"  className="label_filter_menshirt">
                        <input
                        type="checkbox"
                        id="4above"
                        name="4above"
                        checked={rating_mob.includes('4above')}
                        onChange={(e)=>handleRatingsFilter(e)}
                        className="checkbox_filter_men_shirt"
                        
                        />
                        4&#9734; & above
                        </label>
                        </li>
                        <li>
                        <label htmlFor="apple_filtermob_id"  className="label_filter_menshirt">
                        <input
                        type="checkbox"
                        id="3above"
                        name="3above"
                        checked={rating_mob.includes('3above')}
                        onChange={(e)=>handleRatingsFilter(e)}
                        className="checkbox_filter_men_shirt"
                        
                        />
                        3&#9734; & above
                        </label>
                        </li>
                        <li>
                        <label htmlFor="apple_filtermob_id"  className="label_filter_menshirt">
                        <input
                        type="checkbox"
                        id="2above"
                        name="2above"
                        checked={rating_mob.includes('2above')}
                        onChange={(e)=>handleRatingsFilter(e)}
                        className="checkbox_filter_men_shirt"
                        
                        />
                        2&#9734; & above
                        </label>
                        </li>
                        <li>
                        <label htmlFor="apple_filtermob_id"  className="label_filter_menshirt">
                        <input
                        type="checkbox"
                        id="1above"
                        name="1above"
                        checked={rating_mob.includes('1above')}
                        onChange={(e)=>handleRatingsFilter(e)}
                        className="checkbox_filter_men_shirt"
                        
                        />
                        1&#9734; & above
                        </label>
                        </li>
                    </ul>
                <div className="heading_filter_menshirt">Colour</div>
                    <ul id="filter_color_menshirt">
                    {colors_menshirt.map((c,i)=>(
                        <li key={i}>
                        <button
                        name={c}
                        onClick={()=>handlecolor_men_shirt(c)}
                        className="color_palatee_menshirt_li"
                        style={addStyletoColorPalatee(c)}
                        >
                        </button>
                        </li>
                    ))}
                    </ul>
                <div className="heading_filter_menshirt">Fabric</div>
                    <ul className="heading_filter_menshirt_ul">
                        <li>
                        <label htmlFor="apple_filtermob_id"  className="label_filter_menshirt">
                        <input
                        type="checkbox"
                        id="Denim"
                        name="denim"
                        checked={fabric_men_shirt.includes('denim')}
                        onChange={(e)=>handlefabric_men_shirt(e)}
                        className="checkbox_filter_men_shirt"
                        
                        />
                        Denim
                        </label>
                        </li>
                        <li>
                        <label htmlFor="apple_filtermob_id"  className="label_filter_menshirt">
                        <input
                        type="checkbox"
                        id="Cotton"
                        name="cotton"
                        checked={fabric_men_shirt.includes('cotton')}
                        onChange={(e)=>handlefabric_men_shirt(e)}
                        className="checkbox_filter_men_shirt"
                        
                        />
                        Cotton
                        </label>
                        </li>
                        <li>
                        <label htmlFor="apple_filtermob_id"  className="label_filter_menshirt">
                        <input
                        type="checkbox"
                        id="Silk"
                        name="silk"
                        checked={fabric_men_shirt.includes('silk')}
                        onChange={(e)=>handlefabric_men_shirt(e)}
                        className="checkbox_filter_men_shirt"
                        
                        />
                        Silk
                        </label>
                        </li>
                        <li>
                        <label htmlFor="apple_filtermob_id"  className="label_filter_menshirt">
                        <input
                        type="checkbox"
                        id="Polyester"
                        name="polyester"
                        checked={fabric_men_shirt.includes('polyester')}
                        onChange={(e)=>handlefabric_men_shirt(e)}
                        className="checkbox_filter_men_shirt"
                        
                        />
                        Polyester
                        </label>
                        </li>
                        <li>
                        <label htmlFor="apple_filtermob_id"  className="label_filter_menshirt">
                        <input
                        type="checkbox"
                        id="Linen"
                        name="linen"
                        checked={fabric_men_shirt.includes('linen')}
                        onChange={(e)=>handlefabric_men_shirt(e)}
                        className="checkbox_filter_men_shirt"
                        
                        />
                        Linen
                        </label>
                        </li>
                    </ul>
            </div>
        </>
    )
}