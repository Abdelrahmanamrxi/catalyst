
require('dotenv').config()
const {createError}=require('./errors')
const Checkout=async(req,res,next)=>{
    try{
        console.log(req.body)
    }
catch(err){
    next(createError('Error'),500)
}
}

module.exports={Checkout}