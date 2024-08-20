import React, { useContext, useEffect } from "react";
import { AuthContext } from "../store/Auth";
import { Navigate } from "react-router-dom";
export const Logout=()=>{
    const {LogoutUser}=useContext(AuthContext)
    useEffect(()=>{
        LogoutUser()
    },[Logout])

    return(
        <>
            <Navigate to="/login"></Navigate>
        </>
    )
}