const express=require("express")
const app=express()
const bodyparser=require("body-parser")
app.use(bodyparser.json())
const dotenv=require("dotenv")
dotenv.config()
app.get("/dashboard",(req,res)=>{
    res.status(200).send({"uname":"john","role":"admin"})
})
app.get("/welcome",(req,res)=>{
    res.status(200).send("<h1>Welcome User</h1>")
})
//handling data with get request
app.get("/search",(req,res)=>{
    const querydata=req.query
    console.log(req)
    console.log(querydata.fname,querydata.country)
    if(querydata.country==="india"){
        res.status(200).send({"status":true,"msg":"eligible"})
    }
    else{
        res.status(200).send({"status":false,"msg":"not eligible"})
    }   
})
app.get("/userprofile/:role",(req,res)=>{
   const paramaters=req.params
   console.log(paramaters)
   if(paramaters.role==="admin"){
    res.send("admin")
   }
   else{
       res.send("unauthorized access")
   }
})
app.get("/userprofile/admin",(req,res)=>{
    console.log(req)
    res.send("conflict")
})
//post request
app.post("/signin",(req,res)=>{
    console.log(req.body)
    res.send("login successful")
})
app.get("/getuser",(req,res)=>{
    console.log(req)
    res.send({msg:"hello",timezone:"india timezone"})
    })

app.all("*",(req,res)=>{
    res.status(404).send({"msg":"404 File not Found"})
})
app.listen(process.env.PORT,()=>console.log("server started"))