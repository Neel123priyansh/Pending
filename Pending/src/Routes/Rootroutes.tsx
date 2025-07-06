import { Route, Routes, BrowserRouter } from 'react-router-dom'
import {Login} from "../login-sin/Login"
import {Home} from '../Home/home'
import {Signup} from '../login-sin/Signup'
import {Assin} from '../assingment/assin'

const Rootroutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login-Page' element={<Login/>}/> 
        <Route path='/Signup-Page' element={<Signup/>}/>
        <Route path='/Assingment-Page' element={<Assin/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Rootroutes