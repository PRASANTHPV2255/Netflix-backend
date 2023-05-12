const Netflixuser = require("../Schema/Userschema");
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')


const Netuser=async(req,res)=>{
    const{Name,Email,Password,ConfirmPassword}=req.body;

    const Signup=await Netflixuser.findOne({Email})

    if(!Name || !Email || !Password || !ConfirmPassword){
        return res.json({msg:'Fill all the Field'})
    }
    if(Password.length < 8){
        return res.json({msg:'Password must need 8 character'})
    }
    if(Password !== ConfirmPassword){
        return res.json({msg:'Password does not match'})
    }
    if(Signup){
        return res.json({msg:'Email already used'})
    }
    else{
        const salt=await bcrypt.genSalt(10);
        const hashedpassword=await bcrypt.hash(Password,salt)

        const usersignup=await Netflixuser.create({
            Name,Email,Password:hashedpassword
        })
        Token=gentoken(usersignup._id)
        console.log(usersignup);
        res.json({msg:'Signup successful',usersignup,Token:Token})
    }
}

//Login User

const loginuser=async(req,res)=>{
      
    const{Email,Password}=req.body

    const finduser=await Netflixuser.findOne({Email})

    if(finduser && bcrypt.compareSync(Password,finduser.Password)){
        Token=gentoken(finduser._id)
        res.json({msg:'Login Successful',finduser,Token:Token})
        console.log({msg:'Login Successful',Token:Token});
        console.log(finduser);
    }
    else{
        res.json({msg:'Email and Password not correct'})
        console.log({msg:'Email and Password not correct'});
    }

}

const gentoken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'1d'}); 
}
 
module.exports={Netuser,loginuser}