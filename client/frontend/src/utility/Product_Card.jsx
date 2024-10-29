
import {Link} from 'react-router-dom'
import {memo} from 'react'
import { useNavigate,useLocation } from 'react-router-dom'


 function Product_Card({id,image,discount,title,price,rating,_id,cart,addtocart,currentPage}) {
  const navigate=useNavigate()
  const {pathname}=useLocation()
  
  const handleNavigate = () => {
    const newPath = location.pathname === '/' ? `/${_id}` : `/shop/${_id}?page=${currentPage}`;
    navigate(newPath,{state:{from:location.pathname}}); 
  };
 
   return(
    <div onClick={()=>{handleNavigate}} key={id} className="cursor-pointer relative w-full flex justify-center flex-col overflow-hidden rounded-lg border  border-gray-300 bg-white shadow-xl">
  <div className="relative justify-center mx-3 mt-3 flex h-40 sm:h-48 md:h-60 overflow-hidden rounded-xl" onClick={handleNavigate}>
    <img className="object-cover m-2" src={image} alt="product image" />
    {discount ? (
      <span className="absolute top-0 left-0 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
        {discount}% OFF
      </span>
    ) : null}
  </div>
  
  <div onClick={handleNavigate} className="mt-3 px-4 pb-4 flex flex-col justify-between  ">
  
      <h5 className="text-lg sm:text-xl tracking-tight text-slate-900 overflow-hidden whitespace-nowrap text-ellipsis">
        {title}
      </h5>
  
    
    <div className="mt-2 mb-5 gap-3 sm:gap-1 flex items-center justify-between h-12">
      <p>
        <span className="text-lg sm:text-2xl font-bold text-slate-900">{price} EGP</span>
      </p>
      
    </div>
    
   
  </div>
</div>

              )
}
export default(memo(Product_Card))