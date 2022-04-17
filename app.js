const express=require("express")
const app=express()
const bodyparser=require("body-parser")
app.use(bodyparser.json())
const CustomerData=require("./models/User")
const mongoose=require("mongoose")
app.post("/signup",(req,res)=>{
const userdata=req.body
console.log(userdata)
const newuser=new CustomerData({
    email:userdata.email,
    username:userdata.username,
    password:userdata.password,
    age:userdata.age,
    country:userdata.country,
    area:userdata.area,
    pincode:userdata.pincode,
    yoe:userdata.yoe
    })
    newuser.save().then((success)=>res.send({"status":true,"msg":"user added successfully"})).catch((err)=>res.send({"status":false,"msg":"error in signup ! try again "}))
})
app.listen(3001,()=>console.log("server started"))