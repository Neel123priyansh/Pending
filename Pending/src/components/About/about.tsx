import { forwardRef } from "react";
import { useRef } from "react";
import Aboutna from '../../../src/assets/Aboutna.png'

function about() {
  return (
    <div id="aboutus" className='mt-20 flex flex-col items-center'>
        <div className='flex flex-col font-urbanist '>
          <p className="-tracking-tighter text-center text-3xl text-[#301934]">WORK YOU CAN TRUST</p>
          <div className="flex flex-row my-5 text-7xl justify-center text-[#301934]">
          <p className='mr-3'>About</p><p className='text-[#00df9a]'>Pen</p><p>ding</p>
          </div>
        </div>
        <div className=' text-white flex flex-row mx-10 h-max max-w-[100%] bg-[#301934] font-urbanist rounded-3xl p-10'>
        <p className='text-2xl pt-4'>Pending is an online platform connecting ambitious students and top experts from all over the world. It's a great place where people can cooperate with skilled professionals in any subject to succeed in learning or share their expertise with those who seek help. You can find an expert in any subject here on Studybay and connect with them directly via our secure chat, without intermediaries. At Pending, we are dedicated to helping you succeed in your academic endeavors. Our platform is built on the principles of trust, expertise, and seamless communication, making it the ideal place to find the support you need to achieve your goals. Explore our platform today and take the next step in your educational journey with Pending.</p>
        <img src={Aboutna} className='size-96'/>
        </div>
        
    </div>
  )
}

export default about