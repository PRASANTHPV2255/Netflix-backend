

const express=require('express')
const connectDB = require('./Database')
const cors=require('cors')
const router=require('./Testrouter')
const dotenv=require('dotenv')

const app=express()

app.use(express.json())

connectDB();
dotenv.config()
app.use(cors())
app.use('/',router)

app.use('/',(req,res)=>{
    res.json('api is running')
})

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server is Running on Port ${PORT}`))