const Televisions=require('../models/Televisionmodel')
const television=async(req,res)=>{
    try {
        const response=await Televisions.find()
        if(!response){
            res.status(404).json({msg:"No service find"})
        }
        res.status(200).json({msg:response})
    } catch (error) {
        console.log(error)
    }
}
module.exports=television