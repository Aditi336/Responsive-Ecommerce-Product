const {Schema,model}=require('mongoose')

const televisionSchema=new Schema({
    
        name:{
            type:String,
            require:true
        },
        size:{
            type:String,
            require:true
        },
        brand:{
            type:String,
            require:true
        },
        display:{
            type:String,
            require:true
        },
        tv_img:{
            type:String,
            required:true
        },
        tv_img_id:{
            type:String,
            required:true
        },
        special_features:{
            type:[String],
            require:true
        },
        connectivity_technology:{
            type:[String],
            require:true
        },
        aspect_ratio:{
            type:String,
            require:true
        },
        price:{
            type:Number,
            require:true
        },
        product_dimensions:{
            width:{type:String,
                    require:true
                },
            height:{
                type:String,
                require:true
            },
            depth:{
                type:String,
                require:true
            }
        },
        review:{
            type:String,
            required:true
        },
        review_id:{
            type:String,
            require:true
        },
        amount:{
            type:Number,
            required:true
        }
    
})

const Televisions=new model("Televisions",televisionSchema)
module.exports=Televisions