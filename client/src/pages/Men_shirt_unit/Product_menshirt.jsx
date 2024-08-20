import React from "react";
import {Filtering_menshirt} from '../Men_shirt_unit/Filtering_menshirt'
import {Menshirts} from '../Men_shirt_unit/Menshirts'
import './product_menshirt.css'
export const Product_menshirt=()=>{
    return(
        <>
            <div id="contaier_productmenshirt">
                <div>
                    <Filtering_menshirt/>
                </div>
                <div>
                    <Menshirts/>
                </div>
            </div>
        </>
    )
}
