const User=require('../models/Usermodel')
const bcrypt=require('bcryptjs')

const home=async(req,res)=>{
    try{
        res.status(200).send("Welcome to thapa techincal using router")
    }catch(error){
        console.log(error)
    }
}


const register=async(req,res)=>{
    try{
        console.log(req.body);

        const {username,email,phone,password}=req.body;


        const userExits=await User.findOne({email});
        //chcek is the user is present or not
        if(userExits){
            return res.status(400).json({message:"email already exits"});
        }

       

        const usercreated=await User.create({username,email,phone,password});
         res.status(201).json({
            msg:"registeration successfull",
            token:await usercreated.generateToken(),
            userId:usercreated._id.toString(),
        });

    }catch(error){
        res.status(500).json("page not found")
    }
}


// User Login

const login=async(req,res)=>{
    try {
        const {email,password}=req.body


        const userExits=await User.findOne({email});
        console.log("existing user",userExits)

        if(!userExits){
            return res.status(400).json({message:"Invalid Credentials"})
        }
// this takes the
        const user= bcrypt.compare(password,userExits.password);

        console.log(password+userExits.password)
        if(user){
            res.status(200).json({
                msg:"Login successfull",
                token:await userExits.generateToken(),
                userId:userExits._id.toString(),
            });
        }else{
            res.status(400).json({message:"INVALID PASSWORD"});
        }
        
    } catch (error) {
        res.status(500).json("internal server error");
    }
}

const user=async(req,res)=>{
    try {
        const userData=req.user
        return res.status(200).json({userData})
    } catch (error) {
        console.log(error)
    }
}

module.exports={home,register,login,user}