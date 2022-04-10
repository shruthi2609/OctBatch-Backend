const express=require("express")
const app=express()
const dotenv=require("dotenv")
dotenv.config()
app.get("/dashboard",(req,res)=>{
    res.status(200).send({"uname":"john","role":"admin"})
})
app.get("/welcome",(req,res)=>{
    res.status(200).send("<h1>Welcome User</h1>")
})
app.all("*",(req,res)=>{
    res.status(404).send({"msg":"404 File not Found"})
})
app.listen(process.env.PORT,()=>console.log("server started"))