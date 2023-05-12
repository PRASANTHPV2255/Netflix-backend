const  Mongoose  = require("mongoose");




const connectDB = async()=>{
    try{
        const conn = await Mongoose.connect("mongodb+srv://Prasanth007:Prasanthpv3012345@prasanth.bzikmtz.mongodb.net/?retryWrites=true&w=majority",{
        usenewUrlparser:true,
        useUnifiedTopology:true
        })
        console.log('Database connected');
    } 
    catch(error){
        console.log(`Error:${error}`);
        process.exit()
    }
}
module.exports=connectDB;