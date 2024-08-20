import React, { useContext, useState } from "react";
import { AuthContext } from "../../store/Auth";
import './filter_tv.css'
export const Filtering_Television=()=>{
    const {brand_tv,handleBrandFilter_tv,rating_mob,handleRatingsFilter,sizetv,handleSizeFilter}=useContext(AuthContext)
    return(
        // size,display
        <>
            <div id="container_filter_television">
                <div >
                    <div className="heading_filter_television">Brand</div>
                    <ul className="ul_filter_television">
                    {/* samsung,lg,tcl,oneplus,sony */}
                        <li>
                            <label htmlFor="samsung_filtertv_id" className="label_filter_television" >
                                <input
                                type="checkbox"
                                id="samsung_filtertv_id"
                                name="Samsung"
                                checked={brand_tv.includes('samsung')}
                                onChange={(e)=>handleBrandFilter_tv(e)}
                                className="checkbox_filter_television"
                                />
                                Samsung
                            </label>
                        </li>
                        <li>
                            <label htmlFor="lg_filtertv_id" className="label_filter_television">
                                <input
                                type="checkbox"
                                id="lg_filtertv_id"
                                name="LG"
                                checked={brand_tv.includes('lg')}
                                onChange={(e)=>handleBrandFilter_tv(e)}
                                className="checkbox_filter_television"/>
                                LG
                            </label>
                        </li>
                        <li>
                            <label htmlFor="sony_filtertv_id" className="label_filter_television">
                                <input
                                type="checkbox"
                                id="sony_filtertv_id"
                                name="Sony"
                                checked={brand_tv.includes('sony')}
                                onChange={(e)=>handleBrandFilter_tv(e)}
                                className="checkbox_filter_television"/>
                                Sony
                            </label>
                        </li>
                        <li>
                            <label htmlFor="tcl_filtertv_id" className="label_filter_television">
                                <input
                                type="checkbox"
                                id="tcl_filtertv_id"
                                name="TCL"
                                checked={brand_tv.includes('tcl')}
                                onChange={(e)=>handleBrandFilter_tv(e)}
                                className="checkbox_filter_television"/>
                                TCL
                            </label>
                        </li>
                        <li>
                            <label htmlFor="oneplus_filtertv_id" className="label_filter_television">
                                <input
                                type="checkbox"
                                id="oneplus_filtertv_id"
                                name="OnePlus"
                                checked={brand_tv.includes('oneplus')}
                                onChange={(e)=>handleBrandFilter_tv(e)}
                                className="checkbox_filter_television"/>
                                OnePlus
                            </label>
                        </li>
                    </ul>
                </div>
                <div>
                <div className="heading_filter_television">Rating</div>
                    <ul className="ul_filter_television">
                        <li>
                        <label htmlFor="apple_filtermob_id" className="label_filter_television" >
                        <input
                        type="checkbox"
                        id="5"
                        name="5"
                        checked={rating_mob.includes('5')}
                        onChange={(e)=>handleRatingsFilter(e)}
                        className="checkbox_filter_television"
                        />
                        5&#9734;
                        </label>
                        </li>
                        <li>
                        <label htmlFor="apple_filtermob_id" className="label_filter_television" >
                        <input
                        type="checkbox"
                        id="4above"
                        name="4above"
                        checked={rating_mob.includes('4above')}
                        onChange={(e)=>handleRatingsFilter(e)}
                        className="checkbox_filter_television"
                        />
                        4&#9734; & above
                        </label>
                        </li>
                        <li>
                        <label htmlFor="apple_filtermob_id" className="label_filter_television" >
                        <input
                        type="checkbox"
                        id="3above"
                        name="3above"
                        checked={rating_mob.includes('3above')}
                        onChange={(e)=>handleRatingsFilter(e)}
                        className="checkbox_filter_television"
                        />
                        3&#9734; & above
                        </label>
                        </li>
                        <li>
                        <label htmlFor="apple_filtermob_id" className="label_filter_television" >
                        <input
                        type="checkbox"
                        id="2above"
                        name="2above"
                        checked={rating_mob.includes('2above')}
                        onChange={(e)=>handleRatingsFilter(e)}
                        className="checkbox_filter_television"
                        />
                        2&#9734; & above
                        </label>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="heading_filter_television">Size</div>
                    <ul className="ul_filter_television">
                        <li>
                            <label className="label_filter_television">
                                <input
                                type="checkbox"
                                id="size_40_50"
                                name="40-50 inches"
                                checked={sizetv.includes("40-50 inches")}
                                onChange={(e)=>handleSizeFilter(e)}
                                className="checkbox_filter_television"/>
                                40-50 inches
                            </label>
                        </li>
                        <li>
                            <label className="label_filter_television">
                                <input
                                type="checkbox"
                                id="size_50_60"
                                name="50-60 inches"
                                checked={sizetv.includes("50-60 inches")}
                                onChange={(e)=>handleSizeFilter(e)}
                                className="checkbox_filter_television"/>
                                50-60 inches
                            </label>
                        </li>
                        <li>
                            <label className="label_filter_television">
                                <input
                                type="checkbox"
                                id="size_60_70"
                                name="60-70 inches"
                                checked={sizetv.includes("60-70 inches")}
                                onChange={(e)=>handleSizeFilter(e)}
                                className="checkbox_filter_television"/>
                                60-70 inches
                            </label>
                        </li>
                        <li>
                            <label className="label_filter_television">
                                <input
                                type="checkbox"
                                id="size_70_80"
                                name="70-80 inches"
                                checked={sizetv.includes("70-80 inches")}
                                onChange={(e)=>handleSizeFilter(e)}
                                className="checkbox_filter_television"/>
                                70-80 inches
                            </label>
                        </li>
                        <li>
                            <label className="label_filter_television">
                                <input
                                type="checkbox"
                                id="size_80_90"
                                name="80-90 inches"
                                checked={sizetv.includes("80-90 inches")}
                                onChange={(e)=>handleSizeFilter(e)}
                                className="checkbox_filter_television"/>
                                80-90 inches
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}