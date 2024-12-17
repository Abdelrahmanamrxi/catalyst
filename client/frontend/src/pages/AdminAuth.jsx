import React from 'react'

export default function AdminAuth() {
  return (
    <div className='flex items-center h-screen justify-center'> 
        <div className='flex flex-col  justify-center  border-2 border-slate-600  rounded-lg sm:w-1/2 md:w-1/3 w-full m-5'>
         <div className='flex justify-center m-5 items-center  flex-col'>
           <h1 className='font-bold text-4xl font-serif'>catalyst</h1>
           <h1 className='mt-2 md:text-lg text-sm font-sans font-semibold'>Log-In To Start Tracking your Website</h1>
           </div>
           <div className='justify-center flex flex-col m-5'>
           <label htmlFor="email" className="text-black  mt-5 md:text-black block mb-2">Email</label>
              <input 
                name="email"
                type='email'
                className="md:w-full px-5 bg-transparent border-2  shadow-md md:text-black placeholder:text-slate-400 text-black  border-slate-300 rounded-md py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300  focus:shadow"
                placeholder="john@example.com"
              />
            
           <label htmlFor="password" className="text-black  mt-5 md:text-black block mb-2">Password</label>
              <input 
                name="password"
                type='password'
                className="md:w-full px-5 bg-transparent border-2  shadow-md md:text-black placeholder:text-slate-400 text-black  border-slate-300 rounded-md py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300  focus:shadow"
                placeholder="Type here.."
              />
               <button className='mt-6  bg-black border-2 item rounded-md hover:opacity-85 font-serif font-bold px-16 py-2 text-white'> Log In</button>
            
           </div>
        </div>
    
      
    </div>
  )
}
