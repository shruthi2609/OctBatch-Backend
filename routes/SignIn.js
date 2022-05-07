const express=require("express")
const router=express.Router()
const CustomerData=require("../models/User")
const bcrypt=require("bcrypt")
router.post("/signin",async (req,res)=>{
    try{
        const userdata=req.body
        console.log(userdata)
        const userobj=await CustomerData.findOne({email:userdata.email})
        if(userobj){
           const compare=await bcrypt.compare(userdata.password,userobj.password)
           if(compare){
               res.status(200).send({msg:"logged in successfull",status:true})
           }
           else{
            res.status(404).send({msg:"check your password",status:false})
           }
        }
        else{
            res.status(404).send({msg:"email does not exists",status:false})
        }
    }
    catch(err){
        res.status(404).send("exception occured",err)
    }
})


router.post("/login",async (req,res)=>{
    try{
        const userdata=req.body
        console.log(userdata)
        const fetchres=await CustomerData.signIn(userdata.email,userdata.password)
        res.status(200).send(fetchres)  
    }
    catch(err){
        res.status(404).send(err)
    }
})

module.exports=router