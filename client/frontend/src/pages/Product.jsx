import{useState,useEffect,useContext} from 'react'
import { useParams } from 'react-router-dom'
import axios  from 'axios'
import { CartContext } from "../App"
import Loading from '../layout/Loading'

export default function Product(){
  
    const[product,set_product]=useState({})
    const{id}=useParams()
    const[loader,set_loader]=useState(false)

    const {addtocart}=useContext(CartContext)
  
    useEffect(()=>{
     async function getProduct() {
      try{
        set_loader(true)
        const response=await axios.get(`http://localhost:5000/api/products/${id}`)
        set_product(response.data.getProduct)
        set_loader(false)
       }
        catch(err){
        return err
      }
     }
     getProduct()
    },[])
  
    return(
      <div>
{loader?(<Loading/>):(<div className="flex items-center justify-center">
  <div key={product._id} className="relative md:w-2/3 lg:w-2/3 mt-10  flex flex-col lg:flex-row items-center justify-center overflow-hidden sm:rounded-lg sm:border sm:border-gray-100 bg-white sm:shadow-md">
    <img className="object-cover w-1/2 sm:w-1/2  sm:p-3" src={product.image} alt="product image" />

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
       
      </div>

      <a
        href="#"
      onClick={()=>{addtocart(product._id,product.price,product.title,product.image)}}
        className="flex items-center justify-center mt-5 rounded-md bg-black px-4 sm:px-5 py-2 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
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
</div>)}
</div>
    )
}