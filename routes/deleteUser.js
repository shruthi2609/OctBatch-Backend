const express=require("express")
const { findOneAndDelete } = require("../models/User")
const router=express.Router()
const CustomerData=require("../models/User")
const jwt=require("jsonwebtoken")
const authorize=require("../middleware/authorize")
router.post("/delete",async (req,res)=>{
    const ipdata=req.body
    const validate=await CustomerData.signIn(ipdata.email,ipdata.password)
    console.log(validate)
if(validate.status)
{
    const deleteUser=await CustomerData.findOneAndDelete({email:ipdata.email})
    if(deleteUser){
        res.status(200).send({msg:"deleted successfully",status:true})
    }
    else{
        res.status(404).send({msg:"network error",staus:false})
    }
}
else{
    res.status(404).send(validate)
}
})
router.post("/deleteUser",async (req,res)=>{
    try{
    const ipdata=req.body
    const reqtoken=req.headers["authorization"]
    const clienttoken=reqtoken.replace("Bearer ","")
    console.log(clienttoken)
    const verify=jwt.verify(clienttoken,"jamesbond")
    const deleteUser=await CustomerData.findOneAndDelete({email:verify})
    if(deleteUser){
        res.status(200).send({msg:"deleted successfully",status:true})
    }
    else{
        res.status(404).send({msg:"network error",staus:false})
    }
    }
    catch(e){
        res.status(401).send({msg:"bad authorization",status:false})
    }
})

router.post("/deleteUserMiddleware",authorize,async (req,res)=>{
    try{
        console.log(req)
    const deleteUser=await CustomerData.findOneAndDelete({email:req.decodedtoken})
    if(deleteUser){
        res.status(200).send({msg:"deleted successfully",status:true})
    }
    else{
        res.status(404).send({msg:"network error",staus:false})
    }
    }
    catch(e){
        res.status(401).send({msg:"bad authorization",status:false})
    }
})



module.exports=router