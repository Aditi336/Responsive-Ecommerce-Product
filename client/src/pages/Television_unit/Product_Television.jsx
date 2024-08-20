import React from "react";
import { Filtering_Television } from "../Television_unit/Filtering_Television";
import {Television} from "../Television_unit/Television"
import "./product_tv.css"

export const Product_Television=()=>{
    return(
        <>
            <div>
                <div className="container_product_tv">
                    <div>
                        <Filtering_Television/>

                    </div>
                    <div>
                        <Television/>
                    </div>
                </div>
            </div>
        </>
    )
}