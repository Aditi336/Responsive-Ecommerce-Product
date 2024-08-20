const express=require("express")
const router=express.Router()
const television_controller=require('../controller/television_controller')
router.route("/tv").get(television_controller)
module.exports=router