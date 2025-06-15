import { useRef } from "react";
import { useNavigate} from "react-router-dom" 
import about from "../About/about";
export default function header() {
  const navigate = useNavigate()
  const aboutus = useRef(null);

  return (
    <div className='fixed z-50 w-full backdrop-blur-lg bg-white/5 border-white/1 flex justify-between items-center max-w-[100%] text-white h-24 bg-[#f7efd8] mx-auto'>
        <h1 onClick={() => navigate('/')} className='text-5xl font-bold text-[#00df9a] ml-10'>Pending.</h1>
        <ul className='flex flex-row text-xl text-[#303640] gap-8 mr-[30px] font-playfair'>
          <li className='p-4 hover:border-b-2 hover:border-[#00df9a] hover:border-opacity-60'>Home</li>
          <li  className='p-4 hover:border-b-2 hover:border-[#00df9a] hover:border-opacity-60 '>About Us</li>
          <li className='p-4 hover:border-b-2 hover:border-[#00df9a] hover:border-opacity-60'>Price</li >
          <li className='p-4 hover:border-b-2 hover:border-[#00df9a] hover:border-opacity-60'>Contact Us</li>
        </ul>
    </div>
  )
}