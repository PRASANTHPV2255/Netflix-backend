const  Mongoose  = require("mongoose");


const Netuserchema=new Mongoose.Schema({
    Name:{type:String},
    Email:{type:String},
    Password:{type:String}
})

const Netflixuser=Mongoose.model('Netflixuser',Netuserchema)

module.exports=Netflixuser