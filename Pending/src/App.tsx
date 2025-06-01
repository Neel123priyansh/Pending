import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
// import {Login} from "../../Pending/src/login-sin/Login"
import {Home} from '../src/Home/home'
// import {Signup} from '../src/login-sin/Signup'
// import {Assin} from './assingment/assin'
import { Info } from './info'
import { Check } from './components/checkout/check'
// import {Test} from './Test/test'


const App = () => {

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/Login-Page' element={<Login/>}/>  */}
        {/* <Route path='/Signup-Page' element={<Signup/>}/> */}
        {/* <Route path='/Assingment-Page' element={<Assin handleFile={undefined}/>}/> */}
        <Route path='/Info-Page' element={<Info/>}/>
        <Route path = '/Check' element={<Check/>}/>
        {/* <Route path = '/Test' element={<Test/>}/> */}
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App