import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import {Home} from '../src/Home/home'
import { Info } from './info'
import { Check } from './components/checkout/check'
import { PrivateRoute } from './components/checkout/PrivateRoute'


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
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App