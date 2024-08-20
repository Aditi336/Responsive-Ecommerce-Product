const express=require('express')
const router=express.Router()
const Mobile_controller=require('../controller/mobile_controller')
router.route('/mobile').get(Mobile_controller)
module.exports=router