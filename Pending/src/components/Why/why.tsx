import { AiFillTruck } from "react-icons/ai";
import { BsCashCoin } from "react-icons/bs";
import { LuPhoneCall } from "react-icons/lu";
import { FaRegNewspaper } from "react-icons/fa";

function why() {
  return (
    <div className='text-5xl flex flex-col font-work-sans text-center my-10 text-[#3c50e0]'>
      <p className="font-semibold">Why Choose Us?</p>
      <div className="text-sm flex flex-row mt-10 justify-center gap-x-20 text-center text-[#3c50e0]">
        <div className="flex flex-col items-center">
        <FaRegNewspaper size={70}/>
        <p className="text-xl font-bold mb-3">MONEY BACK GUARANTEE</p>  
        <p className="w-52 ">In case you don’t receive the paper you’ve asked for, or you wish to cancel the order for any reason, you can get a full or partial refund.</p>
        </div>
        <div className="flex flex-col items-center">
        <LuPhoneCall size={70}/>
        <p className="text-xl font-bold mb-3">24X7 SUPPORT</p>
        <p className="w-52">Pending is focused on ensuring to meet the needs of the students around the globe for their assignments. Thus, to cater your needs, we are available 24X7 to answer your queries in the best manner possible.</p>
        </div>
        <div className="flex flex-col items-center">
        <BsCashCoin size={70}/>
        <p className="text-xl font-bold mb-3">AFFORDABLE PRICES</p>
        <p className="w-52 ">Our prices are reasonable and affordable because we understand you better.</p>
        </div>
        <div className="flex flex-col items-center">
        <AiFillTruck size={70}/>
        <p className="text-xl font-bold mb-3">ON-TIME DELIVERY</p>
        <p className="w-52">We ensure to deliver your assignment on time because we know if it's not with you on-time, it will be a waste, we ensure to deliver all the assignments on or before the deadline to avoid any last minute hassles.</p>
        </div>
      </div>
    </div>
    

  )
}

export default why