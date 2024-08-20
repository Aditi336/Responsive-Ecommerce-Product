const express=require("express")
const router=express.Router()
const validate=require('../middleware/validate_middleware')
const Schema=require('../validator/auth_validator')
const auth_contoller=require('../controller/auth_controller')
const authMiddleware=require('../middleware/auth_middleware')
router.route("/").get(auth_contoller.home)
router.route("/register").post(validate.validate(Schema.signupSchema),auth_contoller.register)
router.route("/login").post(validate.validate(Schema.loginSchema),auth_contoller.login)
router.route("/user").get(authMiddleware,auth_contoller.user)

module.exports=router