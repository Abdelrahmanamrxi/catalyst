import './App.css'
import {Route,Routes,BrowserRouter,useNavigate} from 'react-router-dom'
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Loading from './layout/Loading'
import { Suspense, useState,createContext,lazy,useMemo, useEffect, useCallback  } from 'react'
import Checkout from './pages/Checkout'
import axios from 'axios'
import { DecodeJWT } from './utility/functions'

export const CartContext=createContext({cart:[],set_cart:()=>{}});

const Product=lazy(()=>import('./pages/Product'))
const Shop=lazy(()=>import('./pages/Shop'))
const ScrollTop =lazy(()=>import('./utility/ScrollTop'))


function App() {
 
  const [cartMenu,set_cartMenu]=useState(false);
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
    const { userId } = DecodeJWT(token); // Decode the token to get userId
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
    const existingProd=cart.find((product)=>product.productId===_id&&product.size===size)
    if(!existingProd){
      set_cartMenu(true)
      set_cart(prev=>[...prev,{productId:_id,quantity:1,price:price,title:title,image,size,category}])
    }
      else{
      set_cart(prev=>{
        return prev.map(product=>{
        if(product.productId===_id&&product.size===size){
          set_cartMenu(true)
         return {...product,quantity:product.quantity+1}
          }
        else{
        set_cartMenu(true)
        return product;
        }
      })
    })
   
  }

  },[cart,set_cart,set_cartMenu])

useEffect(()=>{
  localStorage.setItem('cart',JSON.stringify(cart))
 
  
},[cart])
  const value=useMemo(()=>({cart,addtocart,RemovefromCart,cartMenu,set_cartMenu,set_cart,FetchCart}),[cart,cartMenu,addtocart,RemovefromCart,set_cartMenu])
  
 
  return (
    <CartContext.Provider value={value}>
   <BrowserRouter>
   <Suspense fallback={<Loading/>}>
   <ScrollTop/>
  
    <Routes>
    <Route path='/checkout' element={<Checkout/>}/>
      <Route element={
       
        <Layout/>
      

        
        }>
      <Route path='/' element={
   
        <Home/>
     
        
        }/>
       
      <Route path={`:id`} element={
      
        <Product/>
       
        }/>
       
       <Route path="/shop" element={
        <Shop/>
      
        
        }/>
      
      <Route path={`/shop/:id`} element={
        <Product/>
      }

        />
        
        
       
   
      <Route path='/signup' element={<Signup/>}/>
      <Route path="/profile" element={<Profile/>}/>
      </Route>

    </Routes>
    </Suspense>
    </BrowserRouter>
    </CartContext.Provider>

  )

}
export default App
