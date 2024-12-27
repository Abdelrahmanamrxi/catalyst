import {useState} from 'react'
import { IoClose } from "react-icons/io5"
import axios from 'axios'
export default function EditUser({set_edit,email,userId,updatedAt,edit,remove,set_remove}) {
    const [updated_user,set_user]=useState({
        email:email,
        password:''
    })
    const [message,set_message]=useState('')
    const[error,set_error]=useState('')
const DeleteUser=async(email)=>{
 try{
  set_error('')
  set_message("")
  const response=await axios.delete(`http://localhost:5000/api/dashboard/users?email=${email}`)
  set_message(response.data.msg)
  setTimeout(()=>{
   ClosePopUp(remove)
   window.location.reload()
  },2000)
 }
 catch(err){
  set_error(err.response.data.msg)
 }

}
const UpdateUser=async(e)=>{
    e.preventDefault()
    try{
    set_error('')
    set_message('')
    const response=await axios.patch('http://localhost:5000/api/dashboard/users',updated_user)
    set_message(response.data.msg)
    setTimeout(()=>{
        ClosePopUp(edit)
        window.location.reload()
    },2000)
    
    }
    catch(err){
       set_error(err.response.data.msg)
    }

}
const handleChange=(event)=>{
    const {name,value}=event.target
    set_user((user)=>{
        return {...user,[name]:value}
    })
}
const ClosePopUp=(action)=>{
if(action.name==="remove"){
  set_remove({...action,action:!action.action})
}
else if(action.name==="edit"){
  set_edit({...action,action:!action.action})
}
}
 
  return (
     <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className='flex flex-row  items-center justify-between'>
          <h2 className="text-lg font-bold ">{edit.action?"Edit User":"Are you sure you want to delete the following user?"}</h2>
          
         <button className='iterms-center ml-3' onClick={()=>{ClosePopUp(edit.action?edit:remove)}}><IoClose/></button>
          </div>
          {message?<h1 className={`font-bold text-green-700`}>{message}</h1>:''}
         {error?<h1 className={`font-bold text-red-700`}>{error}</h1>:''}
       {edit.action?<form onSubmit={(e)=>{UpdateUser(e)}}>
          <label htmlFor="email" className=" mt-5 text-black block mb-2">Email</label>
              <input
                name="password"
                type='password'
                className="w-full px-5 bg-transparent border-2  shadow-md text-black placeholder:text-black  text-sm  border-slate-300 rounded-md py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300  focus:shadow"
                placeholder={email}
                disabled={true}
              />
          <label htmlFor="password" className=" mt-5 text-black block mb-2">Change Password</label>
              <input
              onChange={handleChange}
                name="password"
                type='password'
                className="w-full px-5 bg-transparent border-2  shadow-md text-black placeholder:text-slate-400  text-sm  border-slate-300 rounded-md py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300  focus:shadow"
                placeholder="Type here.."
              />
          <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded-md font-bold hover:bg-green-800">
            Confirm
          </button>
          </form>:<button onClick={()=>{DeleteUser(email)}} className='bg-red-700 hover:bg-red-900 font-bold text-white rounded-md px-5 mt-4 py-2'>Yes</button>}
        </div>
      </div>
  )
}
