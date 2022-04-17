const mongoose=require("mongoose")
mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.zdsqd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then((res)=>console.log("connected to db")).catch((err)=>console.log("error in establishing the connecttion`)
//model creation
const CustomerData=mongoose.model("UserList",{
    email:String,
    username:String,
    password:String,
    age:Number,
    country:String,
    area:String,
    pincode:Number,
    yoe:Number
})
module.exports=CustomerData
//adding data 
/*const newuser=new CustomerData({
email:"john@gmail.com",
username:"john",
password:"test123",
age:25,
country:"IND",
area:"VLR",
pincode:632007,
yoe:2
})
newuser.save().then((res)=>console.log("user created successfully")).catch((err)=>console.log(err))*/

