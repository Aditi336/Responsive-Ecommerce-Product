const express=require('express')
const router=express.Router()
const Menshirt_controller=require("../controller/menshirts_controller")
router.route("/mensshirt").get(Menshirt_controller)
module.exports=router