import srm from '../../assets/SRMM-removebg-preview.png'
import srmsoni from '../../assets/SRMSoni-removebg-preview.png'
import srmncr from '../../assets/SRMNCR-removebg-preview.png'
import srmap from '../../assets/srmap-removebg-preview.png'
function logo() {
  return (
    <div className="w-100% gap-20 my-40 h-max items-center px-40  flex flex-col">
      <p className='font-urbanist text-5xl text-[#301934] -tracking-tighter'>TRUSTED BY STUDENTS AT</p>
      <div className='flex flex-row gap-20 anima'>
        <img src={srm} className='h-20'/>
        <img src={srmncr} className='h-20'/>
        <img src={srmsoni} className='h-20'/>
        <img src={srmap} className='h-20'/>
      </div>
    </div>
  )
}

export default logo