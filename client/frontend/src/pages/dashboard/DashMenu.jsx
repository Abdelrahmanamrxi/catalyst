
import { useState } from 'react';
import { IoIosMenu } from "react-icons/io";
import { Outlet } from 'react-router-dom';



export const DashMenu = () => {
    const [sideBar,set_sideBar]=useState(false)
  return (
    <div className='flex flex-col   lg:flex-row'>
      <div className="hidden lg:flex w-1/3 h-screen  p-5 bg-black z-1 text-white flex-col">
      <h1 className="font-bold text-white text-left  text-2xl ">Dashboard</h1>
      <ul className="mt-12 font-bold text-xl flex flex-col gap-5 justify-between">
        <li>Main</li>
        <li>Users</li>
        <li>Orders</li>
        <li>Products</li>
      </ul>
      </div>
      
        {sideBar?(
        <div  className={`fixed top-0 left-0 w-1/2 h-screen opacity-95 bg-black text-white z-50`} >
           <div className="flex justify-end p-4">
              <button onClick={() => set_sideBar(!sideBar)} className="text-white text-2xl">&times;</button>
            </div>
         <ul className='mt-10 flex flex-col gap-6 m-5 font-bold text-xl '>
          <li>Main</li>
          <li>Users</li>
          <li>Orders</li>
          <li>Products</li>
         </ul>

          </div>
        ):''}
    <div className=' lg:hidden flex-row flex justify-between'>
        
    <button onClick={()=>{set_sideBar(!sideBar)
    }} className='flex m-5 flex-row text-center items-center '>
        <IoIosMenu  size={30}/>   
    </button>
    <h1 className='m-5 font-mono font-bold  text-2xl sm:text-4xl'>Dashboard</h1>
   
    </div>
    <Outlet/>
    </div>
  )
}

export default DashMenu
