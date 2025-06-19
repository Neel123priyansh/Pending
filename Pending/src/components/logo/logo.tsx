import srm from '../../assets/SRMM-removebg-preview.png'
import srmsoni from '../../assets/SRMSoni-removebg-preview.png'
import srmncr from '../../assets/SRMNCR-removebg-preview.png'
import srmap from '../../assets/srmap-removebg-preview.png'
import Marquee from 'react-fast-marquee';

function logo() {
  return (
    <div className="gap-20 my-40 w-full items-center px-40  flex flex-col">
      <p className='font-urbanist text-3xl text-[#301934] -tracking-tighter'>TRUSTED BY STUDENTS AT</p>
      <div className='w-screen overflow-hidden'>
      <Marquee className='flex gap-60' gradient gradientWidth={200} loop={0} gradientColor='#ece5e5'>
        <img src={srm} className='h-20 mr-48'/>
        <img src={srmncr} className='h-20'/>
        <img src={srmsoni} className='h-20 mx-48'/>
        <img src={srmap} className='h-20'/>
      </Marquee>
      </div>
    </div>
  )
}

export default logo