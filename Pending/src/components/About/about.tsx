import { forwardRef } from "react";
import { useRef } from "react";

function about() {
  return (
    <div id="aboutus" className='w-[100%] mt-20 h-96 flex flex-col items-center bg-[#301934]'>
        <div className='flex flex-row text-6xl text-white my-10 font-cormorant font-[800] '>
        <p className='mr-2'>About</p><p className='text-[#00df9a]'>Pen</p><p>ding</p>
        </div>
        <div className=' text-white mx-10 font-cormorant font-[200] '>
        <p className='text-2xl'>Pending is an online platform connecting ambitious students and top experts from all over the world. It's a great place where people can cooperate with skilled professionals in any subject to succeed in learning or share their expertise with those who seek help. You can find an expert in any subject here on Studybay and connect with them directly via our secure chat, without intermediaries. At Pending, we are dedicated to helping you succeed in your academic endeavors. Our platform is built on the principles of trust, expertise, and seamless communication, making it the ideal place to find the support you need to achieve your goals. Explore our platform today and take the next step in your educational journey with Pending.</p>
        </div>
        
    </div>
  )
}

export default about