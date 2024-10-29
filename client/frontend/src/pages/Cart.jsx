import {  useContext, useEffect } from "react"
import { CartContext } from "../App"
import { useState } from "react"
import { Link ,useNavigate} from "react-router-dom"

export default function Cart() {
 
    const cart=JSON.parse(localStorage.getItem('cart'))
   const {addtocart,RemovefromCart}=useContext(CartContext)
   
   const [sum,set_sum]=useState(0)
   const token=localStorage.getItem('Token')
   const navigate=useNavigate()
   const handleNavigate = () => {
    navigate('/checkout', { state: { sum:sum } });
  };
  
  useEffect(()=>{
    if(cart===null){
      window.location.reload()
    }
  },[cart])
useEffect(()=>{
  if(cart){
  const total_price=cart.reduce((acc,product)=>{
  return acc+(product.quantity*product.price)
  },0)
  set_sum(total_price)
}
else{
  set_sum(0)
}
},[cart])

   
  return (
    <div>
      
    <div>
      {cart&&cart.length>0?( cart.map((product)=>{
      
  return (
   
    <div key={`${product.productId}-${product.size}`}>
   
    {product.quantity>0?<div className="flex gap-2 flex-col ">
      
      <div className="flex flex-col mb-8 items-start"> 
        <div className="flex flex-row justify-between items-center w-full">
  <img className="md:max-w-20 max-w-16 rounded-md" src={product.image} alt={product.title} />
  <h1 className="font-thin font-sans">{product.price} L.E</h1>
  </div>
  <h1 className='text-md md:text-lg mt-2 leading-tightest tracking-tight md:text-md font-serif font-bold mb-2'>
    {product.title}
  </h1>
  {product.category==="jewelery"?'':<h1 className="font-sans text-lg font-semibold ">Size: <span className="">{product.size}</span></h1>}
  <h1 className="pb-3 font-serif font-semibold">Total Price: <span className="font-thin font-sans">{product.price*product.quantity} L.E</span></h1>
  <div className="flex items-center border-2 border-black px-6 py-1 gap-3 md:gap-5"> 
    <button onClick={() => { addtocart(product.productId, product.price, product.title,product.image,product.size) }} className="font-bold font-serif text-sm md:text-lg">+</button>
    <h1 className="font-bold text-sm md:text-lg">{product.quantity}</h1>
    <button onClick={() => { RemovefromCart(product.productId,product.size) }} className="font-bold font-serif text-sm md:text-lg">-</button>
  </div>
</div>
      
     
    </div>:''}
  </div>
  
  )

       })):''}
       <div>
       <hr className="w-full border-black mt-3 border-t-2"/>
        <h1 className="font-serif font-bold mt-3 text-md md:text-xl"> Estimated Total: <span className=" pl-2 font-semibold font-sans">{sum}L.E</span></h1>
       </div>
     <div className="flex items-center justify-center p-3 mb-5 md:mt-5">
     {token?<button onClick={handleNavigate} className="bg-black px-9 py-2 hover:bg-transparent border-2 font-serif border-black hover:text-black text-white uppercase font-bold">Proceed to checkout</button>:
     <Link to="/signup?message=You must Login first to start ordering"><button className="bg-black px-12 py-2 hover:bg-transparent border-2 font-serif border-black hover:text-black text-white uppercase font-bold">Login First</button></Link>}
     </div>
    </div>

    </div>
  )
}
