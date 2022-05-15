const jwt=require("jsonwebtoken")
const authorize=(req,res,next)=>{
    try{
        const ipdata=req.body
        const reqtoken=req.headers["authorization"]
        const clienttoken=reqtoken.replace("Bearer ","")
        console.log(clienttoken)
        const verify=jwt.verify(clienttoken,"jamesbond")
        console.log(verify)
        req.decodedtoken=verify
        next()
    }
    catch(err){
        res.status(401).send({msg:"bad authorization",status:false})
    }
}
module.exports=authorize