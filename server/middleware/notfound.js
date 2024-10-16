const notFound=(req,res)=>{
    res.status(404).json({msg:'Request Not Found'})
}
module.exports=notFound