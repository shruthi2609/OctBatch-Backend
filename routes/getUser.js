const express=require("express")
const router=express.Router()
const CustomerData=require("../models/User")
const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
router.get("/search/:email",async (req,res)=>{
    console.log(req.params)
    const userdata=await CustomerData.findOne({email:req.params.email})
    console.log(userdata)
    if(userdata){
        res.status(200).send({username:userdata.username,email:userdata.email,place:userdata.country,status:true})
    }
    else{
        res.status(401).send({msg:"user details not found",status:false})
    }
})

router.get("/country/:cnt",async (req,res)=>{
   const userlist= await CustomerData.find({country:req.params.cnt})
   // const userlist= await CustomerData.find({country:req.params.cnt})
   if(userlist){
       res.status(200).send(userlist)
   }
   else{
       res.status(400).send({msg:"no records found",status:false})
   }
})
module.exports=router