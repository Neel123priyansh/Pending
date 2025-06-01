import srm from '../../assets/SRMM.png'
import srmsoni from '../../assets/SRMSoni.png'
import srmncr from '../../assets/SRMNCR.png'
import srmap from '../../assets/srmap.png'
function logo() {
  return (
    <div className="w-100% gap-20 h-40 items-center px-40 bg-[#eaeaec] flex flex-row">
        <img src={srm} className='h-20'/>
        <img src={srmncr} className='h-20'/>
        <img src={srmsoni} className='h-20'/>
        <img src={srmap} className='h-20'/>
    </div>
  )
}

export default logo