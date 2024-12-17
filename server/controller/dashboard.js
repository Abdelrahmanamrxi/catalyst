const {User}=require('../model/model')
const {createError}=require('./errors')
const getUsers=async(req,res,next)=>{
try{
const limit=parseInt(req.query.limit)||8
const page=parseInt(req.query.page)||1
const skip=(page-1)*limit
const totalPages=await User.countDocuments()
let user= await User.find({}).limit(limit).skip(skip)
const formatted_users=user.map((user)=>{
    return {
        userId:user._id,
        email:user.email,
        updatedAt:user.updatedAt.toDateString()
    }
})
res.status(200).json({users:formatted_users,totalPages:Math.ceil(totalPages/limit),currentPage:page})

}
catch(err){
    return next(createError('Error trying to retrieve Users'),500)
}
}
module.exports={getUsers}