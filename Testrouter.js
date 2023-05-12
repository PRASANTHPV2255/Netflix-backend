
const express =require('express')
const {Netuser, loginuser} = require('./Controller/Netusercontroller')

const router=express.Router()

router.route('/usersignup').post(Netuser)
router.route('/userlogin').post(loginuser)

module.exports=router