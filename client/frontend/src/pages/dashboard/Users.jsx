import {useEffect, useState} from 'react'
import img from '../../assets/right.png'
import axios from 'axios'
export default function Users() {
    const [user,set_user]=useState([])
    const [current_page,set_current]=useState(1)
    const[totalPages,set_total]=useState(0)
 
    const getUsers=async()=>{
        try{
        const response=await axios.get(`http://localhost:5000/api/dashboard/users?page=${current_page}&limit=8`)
        console.log(response)
        set_user(response.data.users)
        set_current(response.data.currentPage)
        set_total(response.data.totalPages)
        }
        catch(err){
            console.log(err)
        }
    }
    function IncrementPage(){
        if(totalPages>=current_page){
            set_current(prev=>prev+1)
            }
            else{
                return;
            }
           }
        
    
    function DecrementPage(){
        if(current_page===1){
            return;
        }
            set_current(prev=>prev-1)
       
    }
    useEffect(()=>{
        getUsers()
    },[current_page])
    
 return(
   <div className='lg:w-2/3 lg:flex-col '>
    <h1 className='m-5 font-mono text-lg'>Current Total Users:<span className='font-mono font-light'>123</span></h1>
<div className=" flex justify-center w-full p-4">
  <div className="overflow-x-auto md:overflow-visible w-full sm:w-auto">
    <table className="w-full md:w-auto border-collapse border shadow-md rounded-lg border-gray-300">
      <thead>
        <tr>
          <th className="border border-gray-300 p-1 text-xs sm:p-2 sm:text-sm">User ID</th>
          <th className="border border-gray-300 p-1 text-xs sm:p-2 sm:text-sm">Email</th>
          <th className="border border-gray-300 p-1 text-xs sm:p-2 sm:text-sm">Updated At</th>
          <th className="border border-gray-300 p-1 text-xs sm:p-2 sm:text-sm">Action</th>
        </tr>
      </thead>
      <tbody>
        {user.map((user) => (
          <tr key={user.userId}>
            <td className="border text-[10px] sm:text-xs p-1 sm:p-2 border-gray-300">{user.userId}</td>
            <td className="border text-[10px] sm:text-xs p-1 sm:p-2 border-gray-300">{user.email}</td>
            <td className="border text-[10px] sm:text-xs p-1 sm:p-2 border-gray-300">{user.updatedAt}</td>
            <td className="border  border-gray-300">
              <div className="flex flex-col sm:flex-row justify-center items-center">
                <button className=" w-16 px-2 py-1 m-2 bg-green-500 text-white text-[10px] sm:text-xs rounded-md">
                  Edit
                </button>
                <button className=" w-16 px-2 py-1 m-2 bg-red-800 text-white text-[10px] sm:text-xs rounded-md">
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  
</div>
<div  className='flex justify-center gap-3  m-5 items-center'>
 {current_page===1? '':<button onClick={DecrementPage}><img className='transform scale-x-[-1] w-2' src={img}/></button>}  
<h1>Page<span> {current_page}/{totalPages}</span></h1>
{totalPages<=current_page?'':<button onClick={IncrementPage}><img className='w-2 ' src={img}/></button>}

</div>


   </div>
 )

}