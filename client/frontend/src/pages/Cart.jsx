import { useContext, useEffect } from "react"
import { CartContext } from "../App"
import { useState } from "react"

export default function Cart() {
 
    const cart=JSON.parse(localStorage.getItem('cart'))
   const {addtocart,RemovefromCart}=useContext(CartContext)
   const [sum,set_sum]=useState(0)
  
useEffect(()=>{
  const total_price=cart.reduce((acc,product)=>{
  return acc+(product.quantity*product.price)
  },0)
  set_sum(total_price)
},[cart])
   
  return (
    <div>
      
    <div>
       {cart.map((product)=>{
       
  return (
   
    <div key={product.ProductID}>
   
    {product.quantity>0?<div className="flex gap-2 flex-col ">
      
      <div className="flex flex-col mb-8 items-start"> {/* Align items to the start (left) */}
        <div className="flex flex-row justify-between items-center w-full">
  <img className="md:max-w-20 max-w-16 rounded-md" src={product.image} alt={product.title} />
  <h1 className="font-thin font-sans">{product.price} L.E</h1>
  </div>
  <h1 className='text-xs mt-2 leading-tightest tracking-tight md:text-md font-serif font-bold mb-2'>
    {product.title}
  </h1>
  
  <h1 className="pb-3 font-serif font-semibold">Total Price: <span className="font-thin font-sans">{product.price*product.quantity} L.E</span></h1>
  <div className="flex items-center border-2 border-gray-800 px-6 gap-3 md:gap-5"> 
    <button onClick={() => { addtocart(product.ProductID, product.price, product.image) }} className="font-bold font-serif text-sm md:text-lg">+</button>
    <h1 className="font-bold text-sm md:text-lg">{product.quantity}</h1>
    <button onClick={() => { RemovefromCart(product.ProductID, product.quantity) }} className="font-bold font-serif text-sm md:text-lg">-</button>
  </div>
</div>
      
     
    </div>:''}
  </div>
  
  )

       })}
       <div>
       <hr className="w-full border-black mb-5 mt-3 border-t-2"/>
        <h1 className="font-serif font-bold text-md md:text-xl"> Estimated Total: <span className=" pl-2 font-semibold font-sans">{sum}L.E</span></h1>
       </div>
     <div className="flex items-center justify-center mt-10">
      <button className="bg-black px-12 py-2 hover:bg-transparent border-2 font-serif border-black hover:text-black text-white uppercase font-bold">Checkout</button>
     </div>
    </div>

    </div>
  )
}