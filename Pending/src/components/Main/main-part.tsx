import { WordRotate } from "../magicui/word-rotate";

export default function main() {
  return (
    <div className='flex flex-col justify-center'>
        <div className='max-w-[100%] text-center mt-[120px] w-full text-[#301934] font-urbanist h-10 flex justify-center items-center md:text-6xl sm:text-6xl'> 
         Turning Tasks into Triumphs!  
        </div>
        <div className='max-w-[100%]  text-center mt-[30px] text-[#301934] mb-5 rounded-b-xl w-full h-10 flex flex-row  justify-center items-center font-urbanist md:text-6xl sm:text-6xl'> 
        <p className='mr-3'>Your,</p><WordRotate words={[ 'Assingment', 'Lab File', 'Mini Projects']}/>  
        </div>
    </div>
  )
}