import React, { createContext, useContext, useState } from "react";
import { AuthContext } from "../../store/Auth";
import '../../css/filter_mob.css'


export const Filtering=()=>{
    const {Brand_mob,handleBrandFilter,rating_mob,handleRatingsFilter}=useContext(AuthContext)
    
    return(
        <>
        <div id="mob_filter">
            <div >
                <div className="brand_filter_check">Brand</div>

                <ul id="brand_ul_filter">
                    <li>
                    <label htmlFor="apple_filtermob_id" className="custom-label">
                    <input
                    type="checkbox"
                    id="apple_filtermob_id"
                    name="Apple"
                    checked={Brand_mob.includes('apple')}
                    onChange={(e) => handleBrandFilter(e)}
                    className="custom-checkbox"
                    />
                    Apple
                    </label>
                    </li>
                    <li>
                    <label htmlFor="apple_filtermob_id" className="custom-label">
                    <input
                    type="checkbox"
                    id="samsung_filtermob_id"
                    name="Samsung"
                    checked={Brand_mob.includes('samsung')}
                    onChange={(e) => handleBrandFilter(e)}
                    className="custom-checkbox"
                    />
                    Samsung
                    </label>

                    </li>
                    <li>
                    <label htmlFor="apple_filtermob_id" className="custom-label">
                    <input
                    type="checkbox"
                    id="google_filtermob_id"
                    name="Google"
                    checked={Brand_mob.includes('google')}
                    onChange={(e) => handleBrandFilter(e)}
                    className="custom-checkbox"
                    />
                    Google
                    </label>
                    </li>
                    <li>
                    <label htmlFor="apple_filtermob_id" className="custom-label">
                    <input
                    type="checkbox"
                    id="oneplus_filtermob_id"
                    name="OnePlus"
                    checked={Brand_mob.includes('oneplus')}
                    onChange={(e) => handleBrandFilter(e)}
                    className="custom-checkbox"
                    />
                    OnePlus
                    </label>
                    </li>
                    <li>
                    <label htmlFor="apple_filtermob_id" className="custom-label">
                    <input
                    type="checkbox"
                    id="xiaomi_filtermob_id"
                    name="Xiaomi"
                    checked={Brand_mob.includes('xiaomi')}
                    onChange={(e) => handleBrandFilter(e)}
                    className="custom-checkbox"
                    />
                  
                    Xiaomi
                    </label>
                    </li>
                    <li>
                    <label htmlFor="apple_filtermob_id" className="custom-label">
                    <input
                    type="checkbox"
                    id="sony_filtermob_id"
                    name="Sony"
                    checked={Brand_mob.includes('sony')}
                    onChange={(e) => handleBrandFilter(e)}
                    className="custom-checkbox"
                    />
                    Sony
                    </label>
                    </li>
                </ul>
                
                <div>
                <div className="brand_filter_check">Rating</div>
                    <ul id="brand_ul_filter">
                        <li>
                        <label htmlFor="apple_filtermob_id" className="custom-label-ratings">
                        <input
                        type="checkbox"
                        id="5"
                        name="5"
                        checked={rating_mob.includes('5')}
                        onChange={(e)=>handleRatingsFilter(e)}
                        className="custom-checkbox"
                        />
                        5
                        </label>
                        </li>
                        <li>
                        <label htmlFor="apple_filtermob_id" className="custom-label-ratings">
                        <input
                        type="checkbox"
                        id="4above"
                        name="4above"
                        checked={rating_mob.includes('4above')}
                        onChange={(e)=>handleRatingsFilter(e)}
                        className="custom-checkbox"
                        />
                        4 & above
                        </label>
                        </li>
                        <li>
                        <label htmlFor="apple_filtermob_id" className="custom-label-ratings">
                        <input
                        type="checkbox"
                        id="3above"
                        name="3above"
                        checked={rating_mob.includes('3above')}
                        onChange={(e)=>handleRatingsFilter(e)}
                        className="custom-checkbox"
                        />
                        3 & above
                        </label>
                        </li>
                    </ul>
                </div>
            </div>
            
            </div>
        </>
    )
}