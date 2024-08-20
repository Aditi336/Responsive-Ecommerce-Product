import React from "react";
import "../css/footer.css"
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export const Footer=()=>{

    const section=[
        {
            title:'company',
            items:["about us","our services","privacy policy","affiliate program"]
        },
        {
            title:'get help',
            items:["FAQ","shipping","returns","order status","payment option"]
        },
        {
            title:'online shop',
            items:["tv","mobile","men wear","women wear"]
        },
        {
            title:'follow us',
            items:[<FaFacebook />,<FaInstagramSquare />,<FaTwitterSquare />,<FaLinkedin />]
        },
    ]
    return(
        <>
        <div className="w-full mt-24 bg-slate-900 text-gray-300 py-y px-2" id="section_footer">
            <div className="max-w-[1640px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2
            border-gray-600 py-8
            ">
                {
                    section.map((section,index)=>(
                       <div key={index}>
                            <h6 className="font-bold uppercase pt-2 text-[1.1rem] border-b border-red-500">
                                {section.title}
                            </h6>
                            <ul>
                                {section.items.map((item,i)=>(
                                    <li key={i} className="py-1 text-gray-500 hover:text-white cursor-pointer">{item}</li>
                                ))}
                            </ul>
                       </div> 
                    ))
                }

                <div className="col-span-2 pt-8 md:pt-2">
                    <p className="font-bold uppercase">
                        Subscribe to our newsletter
                    </p>
                    <p className="py-4">
                        The latest updates,articles and resources,sent to your inbox weekly
                    </p>
                    <form className="flex flex-col sm:flex-row">
                        <input type="email" placeholder="Enter email address"
                        className="w-full p-2 mr-4 rounded-md mb-4 text-[1.1rem]"/>
                        <button className="p-2 mb-4 bg-orange-500 rounded-md mb-4">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <div className="flex flex-col max-w-[1640px] px-2 py-4 mx-auto justify-between
        sm:flex-row text-center text-gray-500">
            <p className="py-4">
                2024 Bryt Tech Tips,LLC,ALL rights reserved
            </p>
            
        </div>
        </>
    )
}