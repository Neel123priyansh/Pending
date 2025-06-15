import { ReactTyped } from 'react-typed'

export default function main() {
  return (
    <div className='flex flex-col justify-center'>
        <div className='max-w-[100%] text-center mt-[120px] w-full font-playfair h-10 flex justify-center items-center font- font-[900] md:text-6xl sm:text-6xl'> 
         Turning Tasks into Triumphs!  
        </div>
        <div className='max-w-[100%]  text-center mt-[30px] font-[rgb(48 54 64)] mb-5 rounded-b-xl w-full h-10 flex flex-row  justify-center items-center font-playfair font-[900] md:text-6xl sm:text-6xl'> 
        <p className='mr-3'>Your,</p><ReactTyped strings={[ 'Assingment', 'Lab File', 'Mini Projects']} typeSpeed={60} backSpeed={70} loop/>  
        </div>
    </div>
  )
}