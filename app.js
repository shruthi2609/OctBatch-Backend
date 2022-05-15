const express=require("express")
const app=express()
const bodyparser=require("body-parser")
app.use(bodyparser.json())
const cors=require("cors")
app.use(cors())
const signup=require("./routes/SignUp")
const signin=require("./routes/SignIn")
const deleteAccount=require("./routes/deleteUser")
const upassword=require("./routes/updatePassword")
const getUser=require("./routes/getUser")
app.use("/",signup)
app.use("/",signin)
app.use("/",deleteAccount)
app.use("/",upassword)
app.use("/",getUser)
app.listen(3001,()=>console.log("server started"))

