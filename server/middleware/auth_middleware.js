const jwt=require("jsonwebtoken")
const user=require("../models/Usermodel")
JWT_SECRET_KEY="BLUEDOTSALE"
const authMiddleware=async(req,res,next)=>{
    const token=req.header("Authorization")

    if(!token)
    {
        return res.status(401).json({message:"Unathorized HTTP token"})
    }
    const jwtToken=token.replace("Bearer","").trim()

    try {
        const isVerified=jwt.verify(jwtToken,JWT_SECRET_KEY)
        const userData=await user.findOne({email:isVerified.email})
        .select({
            password:0
        })
        req.user=userData
        req.token=token
        req.userID=userData._id
        next()
    } catch (error) {
        console.log(error)
        return res.status(401).json({message:"Unathorized HTTP ,Invalid token"})
    }
}
module.exports=authMiddleware