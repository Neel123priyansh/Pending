import { useNavigate} from "react-router-dom" 
export default function headerwo() {
  const navigate = useNavigate()

  return (
    <div className='fixed z-50 w-full backdrop-blur-lg bg-white/5 flex justify-between items-center max-w-[100%] text-white h-24 bg-[#f7efd8] mx-auto'>
        <h1 onClick={() => navigate('/')} className='text-5xl font-bold text-[#00df9a] ml-10'>Pending.</h1>
        <ul className='flex flex-row text-lg text-black  gap-8 mr-[460px]'>
        </ul>
    </div>
  )
}