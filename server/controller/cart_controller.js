const {createError}=require('./errors')
const {Cart}=require('../model/model')

const AddToCart=async(req,res,next)=>{
const{productId,userId,size,price,quantity}=req.body

try{

  let cart=await Cart.findOne({userId}).populate({
    path:'items.productId',
    select:'title image'
  })
  if(!cart){
    cart=new Cart({userId,items:[]})
  }

  let existingProduct=cart.items.find(items=>items.productId._id.toString()===productId&&items.size===size)
  if(existingProduct){
    existingProduct.quantity+=quantity
  }
  else{
    const newItem = {
      productId,
      quantity,
      size,
      price
  };
    cart.items.push(newItem)
   
  }
  await cart.save()
  await cart.populate({
    path: 'items.productId',
    select: 'title image'
});
existingProduct = cart.items.find(
  item => item.productId._id.toString() === productId && item.size === size
);
const updatedItem = {
  productId: existingProduct.productId._id,
  title: existingProduct.productId.title,
  image: existingProduct.productId.image,
  quantity: existingProduct.quantity,
  size: existingProduct.size,
  price: existingProduct.price,
  category:existingProduct.productId.category
};
  res.status(201).json(updatedItem)

}
catch(err){
    console.log(err)
 return next(createError('Error while Adding Items into Cart'),500)
}

}
const DeleteItem=async(req,res,next)=>{
  
    const{userId,productId,size}=req.body

  try{
    let cart= await Cart.findOne({userId}).populate({
      path:'items.productId',
      select:'title image'
    })

    if(!cart){
        return next(createError("Couldn't find Cart"),404)
    }
   
    const existingProduct=cart.items.find(product=>product.productId._id.toString()===productId&&product.size===size)
   
    if(!existingProduct){
        return next(createError('No items match your criteria.'),404)
    }
  
    if(existingProduct.quantity<=1){
    cart.items=cart.items.filter(product=>product.productId._id.toString()!==productId&&product.size!==size)
    await cart.save()
    return res.status(204).send()
    }
    else{
        existingProduct.quantity-=1;
    }
   
    await cart.save()
    const updatedItem = {
      productId: existingProduct.productId._id,
      title: existingProduct.productId.title,
      image: existingProduct.productId.image,
      quantity: existingProduct.quantity,
      size: existingProduct.size,
      price: existingProduct.price,
    category:existingProduct.productId.category
  };
    res.status(201).json(updatedItem)
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
       
        const existingProduct=cart.items.find(product=>product.productId._id.toString()===productId&&product.size===size)
        if(!existingProduct){
        return next(createError("Couldn't find item."),404)
        }
        else{
            existingProduct.quantity+=1
        }
        await cart.save()
        await cart.populate({
          path: 'items.productId',
          select: 'title image'
      });
      const updatedItem = {
        productId: existingProduct.productId._id,
        title: existingProduct.productId.title,
        image: existingProduct.productId.image,
        quantity: existingProduct.quantity,
        size: existingProduct.size,
        price: existingProduct.price,
        category:existingProduct.productId.category
    };

        res.status(201).json(updatedItem)
    }
    catch(err){
        console.log(err)
        return next(createError('Error while updating Cart'),500)
    }
}
const GetCart=async(req,res,next)=>{
  const{userId}=req.query
  try{
  let cart=await Cart.findOne({userId}).populate({
    path:'items.productId',
    select:'title image'
  })
  if(!cart){
    res.status.json([])
  }
  const formattedCart = cart.items.map(item => ({
    productId: item.productId._id,
    title: item.productId.title,
    image: item.productId.image,
    quantity: item.quantity,
    size: item.size,
    price: item.price,
    category:item.productId.category
  }));
  res.status(201).json(formattedCart)
}
catch(err){
  return next(createError("Internal Server Error while finding the Cart"),500)
}
}

module.exports={AddToCart,DeleteItem,UpdateCart,GetCart}