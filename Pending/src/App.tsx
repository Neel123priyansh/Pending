import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import {Home} from '../src/Home/home'
import { Info } from './info'
import { Check } from './components/checkout/check'
import { PrivateRoute } from './components/checkout/PrivateRoute'
import OTPverf from './components/Verification/OTPverf'


const App = () => {

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Info-Page' element={<Info/>}/>
        <Route path='/Check' element={
        <PrivateRoute>
          <Check />
        </PrivateRoute>
        }
        />
        <Route path='/Verification' element={<OTPverf/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App