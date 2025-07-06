import Climb from '../../../src/assets/climb.png'
import { FlickeringGrid } from "../magicui/flickering-grid";


function about() {
  return (
    <div id="aboutus" className='mt-10 flex flex-row'>
        <div className=" flex flex-col">
        <div className=' text-white ml-10 w-[96%] bg-[#301934] font-urbanist rounded-tl-3xl py-10 px-4'>
        <p className='text-2xl pt-2'>Pending is an online platform connecting ambitious students and top experts from all over the world. It's a great place where people can cooperate with skilled professionals in any subject to succeed in learning or share their expertise with those who seek help. You can find an expert in any subject here on Studybay and connect with them directly via our secure chat, without intermediaries. At Pending, we are dedicated to helping you succeed in your academic endeavors. Our platform is built on the principles of trust, expertise, and seamless communication, making it the ideal place to find the support you need to achieve your goals. Explore our platform today and take the next step in your educational journey with Pending.</p>
        </div>
        <div className='ml-10 h-52 w-[96%] overflow-hidden bg-[#301934] mt-[7px]'>
        <div className="w-full h-full">
        <FlickeringGrid
        className="w-full h-full"
        squareSize={5}
        color="#00df9a"
        maxOpacity={1} 
        flickerChance={0.1}
      />
      </div>
        </div>
        </div>
        <div className= 'w-[150%] flex flex-col items-center overflow-hidden rounded-tr-3xl mr-10'>
        <img className="w-full h-full object-cover" src={Climb}/>
        </div>
    </div>
  )
}

export default about