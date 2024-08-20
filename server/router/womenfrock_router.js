const express=require('express')
const router=express.Router()
const Womenfrock_controller=require("../controller/womenfrock_controller")
router.route("/womenfrock").get(Womenfrock_controller)
module.exports=router