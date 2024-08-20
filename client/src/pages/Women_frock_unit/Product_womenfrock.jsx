import React from "react";
import {Filtering_womenfrock} from '../Women_frock_unit/Filtering_womenfrock'
import {Womenfrock} from '../Women_frock_unit/Womenfrock'
import "../Men_shirt_unit/product_menshirt.css"
export const Product_womenfrock=()=>{
    return(
        <>
            <div id="contaier_productmenshirt">
                <div>
                    <Filtering_womenfrock/>
                </div>
                <div>
                    <Womenfrock/>
                </div>
            </div>
        </>
    )
}
