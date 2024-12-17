
import { useState,useEffect,useCallback,useMemo,createContext } from 'react';
import { DecodeJWT } from '../utility/functions';
import axios from 'axios';
export const CartContext=createContext({cart:[],set_cart:()=>{}})
export const ContextCart = ({children}) => {
const [cartMenu,set_cartMenu]=useState(false);
const [LoadingState,set_state]=useState(false)
const [cart,set_cart]=useState(()=>{
const storedCart=localStorage.getItem('cart')
if(storedCart){
  try{
    return JSON.parse(storedCart)
  }
  catch(err){
    console.log(err)
    return[]
  }
}

  });
  const FetchCart=async(token)=>{
    const { userId } = DecodeJWT(token); 
    try {
      const response = await axios.get('http://localhost:5000/api/cart', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        params: { userId },
      });
      set_cart(response.data);
    } catch (err) {
      console.log(err);
    
    }
  };
  
  const RemovefromCart=useCallback((_id,size)=>{
    const existingProd=cart.find((product)=>product.productId===_id&&product.size===size)
   if(existingProd){
    set_cart(prev=>{
      return prev.map((product)=>{
    if(product.productId===_id&&product.size===size){
      const newCartQuantity=product.quantity-1;
      if(newCartQuantity>0){
        return{...product,quantity:newCartQuantity}
      }
      else{
        return null;
      }
      
    }
    return product
      
      }).filter(product=>product!=null)
    })
   }

  },[cart])
  const addtocart= useCallback((_id,price,title,image,size,category)=>{
    set_cartMenu(true)
    set_state(false)
    const existingProd=cart.find((product)=>product.productId===_id&&product.size===size)
    if(!existingProd){
      set_cart(prev=>[...prev,{productId:_id,quantity:1,price:price,title:title,image,size,category}])
     
      
    }
      else{
      set_cart(prev=>{
        return prev.map(product=>{
        if(product.productId===_id&&product.size===size){
         
          set_state(false)
         return {...product,quantity:product.quantity+1}
         
          }
        else{
       
        set_state(false)
        return product;
        }
      })
    })
   
  }

  },[cart,set_cart,set_cartMenu])

useEffect(()=>{
  localStorage.setItem('cart',JSON.stringify(cart))
 
  
},[cart])
  const value=useMemo(()=>({cart,addtocart,RemovefromCart,cartMenu,set_cartMenu,set_cart,FetchCart,LoadingState,set_state}),[cart,cartMenu,addtocart,RemovefromCart,set_cartMenu,LoadingState,set_state])
  
  return (
    <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
  )
}

export default ContextCart
