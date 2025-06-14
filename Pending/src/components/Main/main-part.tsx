import { ReactTyped } from 'react-typed'

export default function main() {
  return (
    <div className='text-[#3ccfa1] flex flex-col justify-center'>
        <div className='max-w-[100%] text-center mt-[155px] w-full h-10 flex justify-center items-center font-work-sans font-[900] md:text-5xl sm:text-4xl'> 
         Turning Tasks into Triumphs!  
        </div>
        <div className='max-w-[100%] text-center mt-[10px] mb-16 rounded-b-xl w-full h-10 flex flex-row  justify-center items-center font-work-sans font-[900] md:text-5xl sm:text-4xl'> 
        <p className='mr-3'>Your,</p><ReactTyped strings={[ 'Assingment', 'Lab File', 'Mini Projects']} typeSpeed={60} backSpeed={70} loop/>  
        </div>
    </div>
  )
}