import { BackgroundGradient } from "../ui/background-gradient";

function people() {
  return (
    <div className=" flex flex-row">
        <div className=' flex flex-row ml-10 mt-[6px] justify-evenly w-[94.8%] bg-[#301934] font-urbanist rounded-b-3xl py-10 px-4'>
        <BackgroundGradient className="  p-4 sm:p-10 bg-white"></BackgroundGradient>
        <BackgroundGradient className="  p-4 sm:p-10 bg-white "></BackgroundGradient>
        <BackgroundGradient className="  p-4 sm:p-10 bg-white "></BackgroundGradient>
        <BackgroundGradient className="  p-4 sm:p-10 bg-white "></BackgroundGradient>
        </div>
    </div>
  )
}

export default people