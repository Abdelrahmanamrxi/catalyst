import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react'
export default function About() {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <div id="about" data-aos="fade-up"   className="m-5 h-42">
        <h1 className="text-3xl font-bold font-serif pb-2">About Us</h1>
        <p className='leading-relaxed tracking-wide font-serif text-black'>
        We believe that clothing is not just about style; it is a form of self-expression. Our mission is to empower individuals through fashion by offering high-quality, stylish apparel that fits seamlessly into every aspect of life. From casual wear to elegant pieces, our collections are designed with comfort and versatility in mind, ensuring you look and feel your best, no matter the occasion. 
        </p>
    </div>
  )
}
