import React from "react";
import {Filtering} from './Filtering'
import { Mobiles } from "./Mobile";
import '../../css/product_mobile.css'
export const Product_Mobile=()=>{
    return(
        <>
            <div>
                <div id="filter_mob_sort">
                    <div>
                        <Filtering/>
                    </div>
                    <div>
                        <Mobiles/>
                        {/* sorting */}
                    </div>
                </div>
            </div>
        </>
    )
}