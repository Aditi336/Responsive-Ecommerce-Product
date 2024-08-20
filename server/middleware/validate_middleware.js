const validate=(schema)=>async(req,res,next)=>{
    try {
        // schema declared using zod is being passed as argument to validate
        // so here are parsing the text from the form and then checking if there is any error in function
        // we go to err part and print only the message line which is showing the error
        const parseBody=await schema.parseAsync(req.body);
        req.body=parseBody;
        next();
    } catch (err) {

        const status = 422;
        const message="fill the details properly"
        const extraDetails=err.errors[0].message;

        const error={
            status,
            message,
            extraDetails,
        };

        console.log(error);
        next(error)
        // res.status(400).json({message:error})
        
    }
}

module.exports={validate};