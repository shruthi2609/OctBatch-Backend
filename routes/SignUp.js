const express=require("express")
const router=express.Router()
const CustomerData=require("../models/User")
const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
router.post("/signup",async (req,res)=>{
    try{
    const userdata=req.body
 
    const hashedpw=await bcrypt.hash(userdata.password,5)
    const userobj=await CustomerData.findOne({email:userdata.email})
    if(userobj){
        res.status(400).send({msg:"email already taken",status:false})
    }
    else{
    const newuser=new CustomerData({
        email:userdata.email,
        username:userdata.username,
        password:hashedpw,
        age:userdata.age,
        country:userdata.country,
        area:userdata.area,
        pincode:userdata.pincode,
        yoe:userdata.yoe,
        address:userdata.address
        })
        newuser.signUp().then((success)=>res.send({"status":true,"msg":"user added successfully"})).catch((err)=>res.send({"status":false,"msg":"error in signup ! try again "}))
    }
}
    catch(err){
        res.send("Exception occured reason is ",err)
    }
    })
module.exports=router