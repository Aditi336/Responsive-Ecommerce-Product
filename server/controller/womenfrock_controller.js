const WomenFrocks=require('../models/Womenfrockmodel')
const WomenWear=async(req,res)=>{
    try {
        const response=await WomenFrocks.find()
        if(!response){
            res.status(404).json({msg:"No service found"})
        }
        res.status(200).json({msg:response})
    } catch (error) {
        console.log(error)
    }
}
module.exports=WomenWear