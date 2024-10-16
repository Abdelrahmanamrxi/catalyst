import{useState,useEffect,useContext} from 'react'
import { useParams } from 'react-router-dom'
import axios  from 'axios'
import { CartContext } from "../App"

export default function Product(){
  
    const[product,set_product]=useState({})
    const{id}=useParams()

    const {addtocart}=useContext(CartContext)
  
    useEffect(()=>{
     async function getProduct() {
        const response=await axios.get(`http://localhost:5000/api/products/${id}`)
       set_product(response.data.getProduct)
     }
     getProduct()
    },[])
  
    return(
<div className="flex items-center justify-center">
  <div key={product._id} className="relative md:w-2/3 lg:w-2/3 mt-10  flex flex-col lg:flex-row items-center justify-center overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
    <img className="object-cover w-1/2 sm:w-1/2" src={product.image} alt="product image" />

    {product.discount && (
      <span className="absolute top-0 left-0 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
        {product.discount}% OFF
      </span>
    )}

    <div className="mt-3 px-4 pb-4 min-h-[160px] sm:min-h-[180px] md:min-h-[220px] flex flex-col justify-between">
      <a href="#">
        <h5 className="text-2xl sm:text-3xl sm:mb-5 tracking-tight font-bold text-slate-900">
          {product.title}
        </h5>
        <h3 className='capitalize leading-loose font-serif tracking-wider'>{product.description}</h3>
      </a>

      <div className="mt-2 mb-5 flex flex-row items-center justify-between">
        <p className="mr-4">
          <span className="text-xl sm:text-2xl font-bold text-slate-900">{product.price} EGP</span>
        </p>
        <div className="flex items-center">
          {Array(4).fill(0).map((_, index) => (
            <svg
              key={index}
              aria-hidden="true"
              className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          ))}
          <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
          
          </span>
        </div>
      </div>

      <a
        href="#"
      onClick={()=>{addtocart(product._id,product.price,product.title,product.image)}}
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
      </a>
    </div>
  </div>
</div>

    )
}