
import {Link} from 'react-router-dom'
import {memo} from 'react'
import { useNavigate } from 'react-router-dom'


 function Product_Card({id,image,discount,title,price,rating,_id,cart,addtocart}) {
  const navigate=useNavigate()
 
   return(
    <div key={id} className="relative w-full flex justify-center flex-col overflow-hidden rounded-lg border  border-gray-100 bg-white shadow-md">
  <Link className="relative justify-center mx-3 mt-3 flex h-40 sm:h-48 md:h-60 overflow-hidden rounded-xl" to={`${_id}`}>
    <img className="object-cover m-2" src={image} alt="product image" />
    {discount ? (
      <span className="absolute top-0 left-0 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
        {discount}% OFF
      </span>
    ) : null}
  </Link>
  
  <div className="mt-3 px-4 pb-4 flex flex-col justify-between  ">
    <a href="#" className="flex-grow">
      <h5 className="text-lg sm:text-xl tracking-tight text-slate-900 overflow-hidden whitespace-nowrap text-ellipsis">
        {title}
      </h5>
    </a>
    
    <div className="mt-2 mb-5 gap-3 sm:gap-1 flex items-center justify-between h-12">
      <p>
        <span className="text-lg sm:text-2xl font-bold text-slate-900">{price} EGP</span>
      </p>
      
    </div>
    
    <button
   
     onClick={()=>{navigate(`/${_id}`)}}
     
    
      className="flex items-center justify-center rounded-md bg-black px-4 sm:px-5 py-2 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2 h-5 sm:h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
      Add to cart
    </button>
  </div>
</div>

              )
}
export default(memo(Product_Card))