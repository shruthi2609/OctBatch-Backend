const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
mongoose.connect("mongodb+srv://cram_js:test123@cluster0.zdsqd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then((res)=>console.log("connected to db")).catch((err)=>console.log("error in establishing the connecttion"))
//model creation
/*const CustomerData=mongoose.model("UserList",{
    email:String,
    username:String,
    password:String,
    age:Number,
    country:String,
    area:String,
    pincode:Number,
    yoe:Number
})*/
const custSchema=mongoose.Schema(
    {
        email:String,
        username:String,
        password:String,
        age:Number,
        country:String,
        area:String,
        pincode:Number,
        yoe:Number,
        address:String
    }
)

//custom methods
custSchema.methods.signUp=async function(){
    const user=this
    console.log(user.address)
    if(!user.address){
        console.log("condition is hit")
        user.address=user.country+" "+user.area+" "+user.pincode
    }
    await user.save()
 }
 
 //statics method
 custSchema.statics.signIn=async function(uemail,upassword){
     console.log("statics method is hit")
     const fetch=await CustomerData.findOne({email:uemail})
     if(fetch){
        const compare=await bcrypt.compare(upassword,fetch.password)
     
        if(compare){
            return {msg:"logged in successfully",status:true}
        }
        else{
       return {msg:"check your password",status:false}
        }
     }
     else{
        return {msg:"email id does not exists",status:false}
     }
     
 }

const CustomerData=mongoose.model("UserList",custSchema)
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

