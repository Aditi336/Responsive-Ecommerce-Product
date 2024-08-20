const Mobiles=require('../models/Mobilemodel')

const mobile=async(req,res)=>{
    try {
        const response=await Mobiles.find()
        if(!response){
            res.status(404).json({msg:"No service found"})
        }
        res.status(200).json({msg:response})
    } catch (error) {
        console.log(error)
    }
}
module.exports=mobile