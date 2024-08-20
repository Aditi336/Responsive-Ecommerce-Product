const errorMiddleware=(err,req,res,next)=>{
    // this is the errorMiddleware part so when we get error in validate-middleware it is directed to this file
    const status=err.status || 500;
    const message=err.message || "BACKEND ERROR";
    const extraDetails=err.extraDetails || "error from backend";

    return res.status(status).json({message,extraDetails});
};

module.exports=errorMiddleware;