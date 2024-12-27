import './App.css'
import {Route,Routes,BrowserRouter,useNavigate} from 'react-router-dom'
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Loading from './layout/Loading'
import { Suspense } from 'react'
import Checkout from './pages/Checkout'
import AdminAuth from './pages/AdminAuth'
import Admin from './pages/dashboard/Admin'
import Users from './pages/dashboard/Users/Users'
import { lazy } from 'react'
import DashMenu from './pages/dashboard/DashMenu'
import DashboardContext from './Context/DashboardContext'
import Orders from './pages/dashboard/Orders'


const Product=lazy(()=>import('./pages/Product'))
const Shop=lazy(()=>import('./pages/Shop'))
const ScrollTop =lazy(()=>import('./utility/ScrollTop'))


function App() {
 
 
 
  return (
    
   <BrowserRouter>
   <Suspense fallback={<Loading/>}>
   <ScrollTop/>
  
    <Routes>
      <Route element={<DashMenu/>}>
    
      <Route path="/admin" element={<Admin/>}/>
      <Route path='/admin/users' element={<Users/>}/>
      <Route path="/admin/orders" element={<Orders/>}/>
   
      </Route>
      <Route path='/auth' element={<AdminAuth/>}/>
    <Route path='/checkout' element={<Checkout/>}/>
      <Route element={
       
        <Layout/>
      

        
        }>
      <Route path='/' element={
   
        <Home/>
     
        
        }/>
       
      <Route path={`:id`} element={
      
        <Product/>
       
        }/>
       
       <Route path="/shop" element={
        <Shop/>
      
        
        }/>
      
      <Route path={`/shop/:id`} element={
        <Product/>
      }

        />
        
        
       
   
      <Route path='/signup' element={<Signup/>}/>
      <Route path="/profile" element={<Profile/>}/>
      </Route>

    </Routes>
    </Suspense>
    </BrowserRouter>
   

  )

}
export default App
