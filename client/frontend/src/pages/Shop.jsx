import Product_Card from "../utility/Product_Card"
import axios from 'axios'
import { useEffect,useState,useContext } from "react"

import img from '../assets/right.png'
import { CartContext } from "../App"

export default function Shop(){
    const {cart,addtocart}=useContext(CartContext)
    const [all_products,set_products]=useState([])
    const [currentPage,set_current]=useState(1)
    const [total_pages,set_total]=useState(0)
    

    const getProducts=async()=>{
    try{
    const response=await axios.get(`http://localhost:5000/api/products?page=${currentPage}&limit=6`)
    set_products(response.data.getProducts)
    set_total(response.data.totalPages)
    set_current(response.data.current_page)}
    catch(err){
        console.log(err)
    }
    
}
useEffect(()=>{
getProducts()
window.scrollTo(0,0)

},[currentPage])
   
   function handlePageIncrement(){
    if(total_pages>=currentPage){
    set_current(prev=>prev+1)
    }
    else{
        return;
    }
   }
   function handlePageDecrement(){
    if(currentPage===1){
        return;
    }
        set_current(prev=>prev-1)
   }
  
 
    return(
        <div className="flex flex-col min-h-[64vh]">
     <div className=" m-2  grid items-start gap-3  grid-cols-2  sm:grid-cols-3">
        
       {all_products.map((product)=>{
        return <Product_Card cart={cart} addtocart={addtocart} key={product.id} {...product}/>
       })}
     
     </div>
     <div className="flex flex-grow justify-center items-center gap-5  m-5">
     {currentPage==1?"":<button onClick={handlePageDecrement}><img className="w-3 transform scale-x-[-1] " src={img}/></button>}
    <p className="font-semibold text-md">Page <span className="font-semibold">{currentPage}/{total_pages} </span></p>
    {total_pages<=currentPage?'':<button onClick={handlePageIncrement}><img className="w-3 " src={img}/></button>}
   

     </div>
     </div>

    
    )
}