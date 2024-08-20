// zod is used to add validations to the fields like what should be entered and how many number of charcters
const {z}=require("zod")

// creating an object schema 

const signupSchema=z.object({
    username: z
            .string({required_error:"Name is required"})
            .trim()
            .min(3,{message:"Name must be atleast 3 chars"})
            .max(255,{message:"Name must not me more than 255 chars"}),
    email:  z
            .string({required_error:"email is required"})
            .trim()
            .min(10,{message:"email must be atleast 3 chars"})
            .max(115,{message:"email must not me more than 255 chars"}),
    phone:  z
            .string({required_error:"Phone number is required"})
            .trim()
            .min( 10,{message:"phone must be atleast 10 chars"})
            .max(10,{message:"phone must not me more than 10 chars"}),
    password: z
            .string({required_error:"password is required"})
            .trim()
            .min(7,{message:"password must be atleast 7 chars"})
            .max(7,{message:"password must be atleast 7 chars"}),




});


const loginSchema=z.object({
    email:  z
        .string({required_error:"incorrect email"})
        .trim()
        .min(10,{message:"email atleast 7"})
        .max(115,{message:"enter email less than 244"}),
    password:  z
        .string({required_error:"incorrect password"})
        .trim()
        .min(7,{message:"password atleast 7"})
        .max(7,{message:"password atleast 7"}),
    
})

module.exports={signupSchema,loginSchema}