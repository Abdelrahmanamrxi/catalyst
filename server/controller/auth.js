const jwt=require('jsonwebtoken')
const {createError}=require('./errors')

const AuthUser= async(req,res,next)=>{

    const authHeader=req.headers.authorization
    if(authHeader){
      const token=authHeader.split(' ')[1]
      jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err){
          return next(createError("Couldn't Authenticate User"),403)
        }
        req.user=user
        next()
      })
    }
    else{
      res.status(401).json({msg:"Error User Cannot be found."})
    }
  
  }
  module.exports=AuthUser