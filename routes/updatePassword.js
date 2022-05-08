const express=require("express")
const router=express.Router()
const CustomerData=require("../models/User")
const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
router.post("/updatepassword",async (req,res)=>{
    const ipdata=req.body// email , current pw , new pw
    const validate=await CustomerData.signIn(ipdata.email,ipdata.password)
    if(validate.status){
        const updatedpw=await bcrypt.hash(ipdata.upassword,5)
        const ures=await CustomerData.findOneAndUpdate({email:ipdata.email},{password:updatedpw})
        if(ures){
            res.status(200).send({msg:"updated password successfully",status:true})
        }
        else{
            res.status(401).send({msg:"some err occured please retry",status:false})
        }
    }
    else{
        validate.msg="check your current password"
        res.status(401).send(validate)
    }

})
module.exports=router