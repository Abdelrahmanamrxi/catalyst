const {createError}=require('./errors')
const {Cart}=require('../model/model')

const AddToCart=async(req,res,next)=>{
const{productId,quantity,userId,size}=req.body
try{
  let cart=await Cart.findOne({userId})
  if(!cart){
    cart=new Cart({userId,items:[]})
  }
  const existingProduct=cart.items.find(items=>items.productId===productId)
  if(existingProduct){
    existingProduct.quantity+=quantity
  }
  else{
    cart.items.push({productId,quantity,size})
  }
  await cart.save()
  res.status(201).json({msg:'Cart Created Succesfully',cart})

}
catch(err){
    console.log(err)
 return next(createError('Error while Adding Items into Cart'),500)
}

}
const DeleteItem=async(req,res,next)=>{
    const{size,userId,productId}=req.body
   
  try{
    let cart= await Cart.findOne({userId})
    if(!cart){
        return next(createError("Couldn't find Cart"),404)
    }
    const existingProduct=cart.items.find(product=>product.productId.toString()===productId&&product.size===size)
   
    if(!existingProduct){
        return next(createError('No items match your criteria.'),404)
    }
  
    if(existingProduct.quantity<=0){
    cart.items=cart.items.filter(product=>product.productId!==productId&&product.size!==size)
    }
    else{
        existingProduct.quantity-=1;
    }
   
    await cart.save()
    res.status(201).json(cart)
  }
  catch(err){
    console.log(err)
    return next(createError("Error while Removing from Cart"),500)
  }
}
const UpdateCart=async(req,res,next)=>{
    const{userId,productId,size}=req.body
    try{
        let cart=await Cart.findOne({userId})
        if(!cart){
            return next(createError("Couldn't find Cart."))
        }
        const existingProduct=cart.items.find(product=>product.productId.toString()===productId&&product.size===size)
        if(!existingProduct){
        return next(createError("Couldn't find item."),404)
        }
        else{
            existingProduct.quantity+=1
        }
        await cart.save()
        res.status(201).json(cart)
    }
    catch(err){
        console.log(err)
        return next(createError('Error while updating Cart'),500)
    }
}


module.exports={AddToCart,DeleteItem,UpdateCart}