import './App.css'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Loading from './layout/Loading'
import { Suspense, useState,createContext,lazy,useMemo, useEffect  } from 'react'

export const CartContext=createContext({cart:[],set_cart:()=>{}});

const Product=lazy(()=>import('./pages/Product'))
const Shop=lazy(()=>import('./pages/Shop'))
const ScrollTop =lazy(()=>import('./utility/ScrollTop'))


function App() {
  
  const [cart,set_cart]=useState(()=>{return JSON.parse(localStorage.getItem('cart'))||[]});
  function RemovefromCart(_id){
    const existingProd=cart.find((product)=>product.ProductID===_id)
   if(existingProd){
    set_cart(prev=>{
      return prev.map((product)=>{
    if(product.ProductID===_id){
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

  }
  function addtocart(_id,price,title,image){
    const existingProd=cart.find((product)=>product.ProductID===_id)
    if(!existingProd){
      set_cart(prev=>[...prev,{ProductID:_id,quantity:1,price:price,title:title,image}])
    }
      else{
      set_cart(prev=>{
        return prev.map(product=>{
        if(product.ProductID===_id){
         return {...product,quantity:product.quantity+1}
          }
        else 
        return product;
      })
    })
   
  }

  }
useEffect(()=>{
  localStorage.setItem('cart',JSON.stringify(cart))
 
  
},[cart])
  const value=useMemo(()=>({cart,addtocart,RemovefromCart}),[cart])
  
 
  return (
    <CartContext.Provider value={value}>
   <BrowserRouter>
   <Suspense fallback={<Loading/>}>
   <ScrollTop/>
    <Routes>
      <Route element={
       
        <Layout/>
      

        
        }>
      <Route path='/' element={
   
        <Home/>
     
        
        }/>
      
      <Route path={`/:id`} element={
      
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
