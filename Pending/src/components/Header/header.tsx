import { useRef } from "react";
import { useNavigate} from "react-router-dom" 
import about from "../About/about";
export default function header() {
  const navigate = useNavigate()
  const aboutus = useRef(null);

  return (
    <div className='fixed z-50 w-full backdrop-blur-lg bg-white/5 flex justify-between items-center max-w-[100%] text-white h-24 bg-[#f7efd8] mx-auto'>
        <h1 onClick={() => navigate('/')} className='text-5xl font-bold text-[#00df9a] ml-10'>Pending.</h1>
        <ul className='flex flex-row text-lg text-black  gap-8 mr-[460px]'>
          <li className='p-4 hover:border-b-2 hover:border-[#00df9a] hover:border-opacity-60'>Home Page</li>
          <li  className='p-4 hover:border-b-2 hover:border-[#00df9a] hover:border-opacity-60 '>About Us</li>
          <li className='p-4 hover:border-b-2 hover:border-[#00df9a] hover:border-opacity-60'>Price</li >
          <li className='p-4 hover:border-b-2 hover:border-[#00df9a] hover:border-opacity-60'>Contact Us</li>
        </ul>

        {/*<div className='hiddden md:flex  lg:gap-[15px] items-center'>
        <button onClick={() => navigate('Login-Page') } className='text-white md:py-2.5 px-7 text-lg '>Login</button>
        <button onClick={() => navigate('Signup-Page')} className='text-black bg-[#ffffff] text-lg rounded-[5px] md:py-2.5 px-7 '>Sign Up</button>
        </div>*/}
    </div>
  )
}