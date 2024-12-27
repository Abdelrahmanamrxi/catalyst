import React from 'react'

const Orders = () => {
  return (
    
      <div className='lg:w-3/4 lg:flex-col '>
          <h1 className='m-5 font-mono text-2xl font-bold'>Orders Dashboard</h1>
      <div className=" flex justify-center w-full p-4">
        <div className="overflow-x-auto xl:overflow-visible   w-full sm:w-auto">
          <table className="w-full relative md:w-auto border-collapse border shadow-md rounded-lg border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-1 text-xs sm:p-2 sm:text-sm">Order ID</th>
                <th className="border border-gray-300 p-1 text-xs sm:p-2 sm:text-sm">Email</th>
                <th className="border border-gray-300 p-1 text-xs sm:p-2 sm:text-sm">User ID</th>
                <th className="border border-gray-300 p-1 text-xs sm:p-2 sm:text-sm">Phone</th>
                <th className="border border-gray-300 p-1 text-xs sm:p-2 sm:text-sm">State</th>
                <th className="border border-gray-300 p-1 text-xs sm:p-2 sm:text-sm">Country</th>
                <th className="border border-gray-300 p-1 text-xs sm:p-2 sm:text-sm">First Name</th>
                <th className="border border-gray-300 p-1 text-xs sm:p-2 sm:text-sm">Last Name</th>
                <th className="border border-gray-300 p-1 text-xs sm:p-2 sm:text-sm">Address</th>
                <th className="border border-gray-300 p-1 text-xs sm:p-2 sm:text-sm">Items</th>
                <th className="border border-gray-300 p-1 text-xs sm:p-2 sm:text-sm">Status</th>
                <th className="border border-gray-300 p-1 text-xs sm:p-2 sm:text-sm">Payment Type</th>
                <th className="border border-gray-300 p-1 text-xs sm:p-2 sm:text-sm">Total Price</th>
                <th className="border border-gray-300 p-1 text-xs sm:p-2 sm:text-sm">Time Purchase</th>
              </tr>
            </thead>
            <tbody>
              
        
                <tr>
                  
                  <td className="border text-[10px] sm:text-xs p-1 sm:p-2 border-gray-300">123123</td>
                  <td className="border text-[10px] sm:text-xs p-1 sm:p-2 border-gray-300">f@gmail.com</td>
                  <td className="border text-[10px] sm:text-xs p-1 sm:p-2 border-gray-300">201603</td>
                  <td className="border text-[10px] sm:text-xs p-1 sm:p-2 border-gray-300">123123123</td>
                  <td className="border text-[10px] sm:text-xs p-1 sm:p-2 border-gray-300">Suez</td>
                  <td className="border text-[10px] sm:text-xs p-1 sm:p-2 border-gray-300">Egypt</td>
                  <td className="border text-[10px] sm:text-xs p-1 sm:p-2 border-gray-300">Jack</td>
                  <td className="border text-[10px] sm:text-xs p-1 sm:p-2 border-gray-300">Grealish</td>
                  <td className="border text-[10px] sm:text-xs p-5 border-gray-300">19 MK Street Left</td>
                  <td className="border text-[10px] sm:text-xs p-5 sm:p-2 border-gray-300">14th MK and 12312 K</td>
                  <td className="border text-[10px] sm:text-xs p-1 sm:p-2 border-gray-300">Active</td>
                  <td className="border text-[10px] sm:text-xs p-1 sm:p-2 border-gray-300">COD</td>
                  <td className="border text-[10px] sm:text-xs p-1 sm:p-2 border-gray-300">2333 EGP</td>
                  <td className="border text-[10px] sm:text-xs p-1 sm:p-2 border-gray-300">2016-04-3</td>
                  <td className="border  border-gray-300">
                    <div className="flex flex-col sm:flex-row justify-center items-center">
                     
                    </div>
                  </td>
                </tr>
           
            </tbody>
           
           
          </table>
         
        </div>
        
      </div>
     
      
      
         </div>
   
  )
}

export default Orders
