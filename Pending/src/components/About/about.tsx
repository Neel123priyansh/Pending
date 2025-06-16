import { forwardRef } from "react";
import { useRef } from "react";
import Aboutna from '../../../src/assets/Aboutna.png'


function about() {
  return (
    <div id="aboutus" className='my-10 flex gap-0 flex-row'>
        <div className=" flex flex-col">
        <div className=' text-white ml-10 w-[100%] bg-[#301934] font-urbanist rounded-tl-3xl p-10'>
        <p className='text-2xl pt-2'>Pending is an online platform connecting ambitious students and top experts from all over the world. It's a great place where people can cooperate with skilled professionals in any subject to succeed in learning or share their expertise with those who seek help. You can find an expert in any subject here on Studybay and connect with them directly via our secure chat, without intermediaries. At Pending, we are dedicated to helping you succeed in your academic endeavors. Our platform is built on the principles of trust, expertise, and seamless communication, making it the ideal place to find the support you need to achieve your goals. Explore our platform today and take the next step in your educational journey with Pending.</p>
        </div>
        <div className='ml-10 h-max w-[96%] bg-[#301934] rounded-bl-3xl mt-1 p-10'/>
        </div>
        <div className= 'bg-[#301934] w-[150%] rounded-tr-3xl mr-10 rounded-br-3xl'>
        <img className="mt-5" src={Aboutna}/>
        </div>
    </div>
  )
}

export default about