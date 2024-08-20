require('dotenv').config
const express=require('express')
const cors=require('cors')
const connectDb=require('./utils/db')
const router=require('./router/auth_router')
const mobile_router=require('./router/mobile_router')
const television_router=require('./router/television_router')
const menshirt_router=require('./router/menshirts_router')
const womenfrock_router=require('./router/womenfrock_router')
const errorMiddleware = require('./middleware/error_middleware')

const app=express()

const corsOption={
    origin:"http://localhost:5173",
    methods:"GET,PUT,POST,DELETE,PATCH,HEAD",
    credentials:true
}

app.use(cors(corsOption))
app.use(express.json())

app.use("/api/auth",router)
app.use("/api/purchase_mobile",mobile_router)
app.use("/api/purchase_television",television_router)
app.use("/api/purchase_menshirt",menshirt_router)
app.use("/api/purchase_womenfrock",womenfrock_router)

app.use(errorMiddleware)

const PORT=5000
connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running at port ${PORT}`)
    })
})
