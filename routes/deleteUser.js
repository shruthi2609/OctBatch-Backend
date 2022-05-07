const express=require("express")
const { findOneAndDelete } = require("../models/User")
const router=express.Router()
const CustomerData=require("../models/User")
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
module.exports=router