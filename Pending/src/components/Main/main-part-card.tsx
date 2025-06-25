import Ass from '../../assets/Ass.jpeg'
import Lab from '../../assets/Lab.jpeg'
import Mini from '../../assets/Mini.jpeg'
import Major from '../../assets/Major.jpeg'
import { Tilt } from 'react-tilt'
import { useNavigate} from "react-router-dom" 
import { Vortex } from "../ui/vortex";

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}



function main_part_card() {
    const navigate = useNavigate()
  return (
    <div className= 'mx-7 pb-12 pt-10 overflow-hidden px-10 gap-10 relative rounded-3xl bg-[#000000] max-w-[100%] h-[100%]'>
        <Vortex particleCount={50} rangeY={800} baseHue={180}>
       <button onClick={() => navigate('Info-Page') }>
        <Tilt options={defaultOptions}>
            <div className='h-[320px] rounded-2xl w-[240px] font-urbanist ml-20 text-3xl text-white bg-[#301934]'>
            <img className='rounded-t-2xl ' src={Ass}/>
            <p className='text-center pt-2'>Assingment</p> 
        </div>
        </Tilt>
        </button>
        <button onClick={()=> navigate('/Info-lab')}>

            <Tilt options={defaultOptions}>
            <div className='h-[320px] rounded-2xl mt-12 w-[240px] text-3xl font-urbanist text-white bg-[#301934] mx-20 '>
            <img className='rounded-t-2xl' src={Lab}/>
            <p className='text-center pt-2'>Lab File</p>
        </div></Tilt>
        </button>
        <button onClick={() => navigate("/Mini-Project")}> <Tilt options={defaultOptions}><div className='h-[320px] rounded-2xl w-[240px] text-3xl text-white bg-[#301934] font-urbanist '>
            <img className='rounded-t-2xl' src={Mini}/>
            <p className='text-center pt-2'>Mini-Project</p>
        </div></Tilt></button>
        <button><Tilt options={defaultOptions}><div className='h-[320px] rounded-2xl w-[240px] text-3xl ml-20  text-white bg-[#301934] font-urbanist'>
            <img className='rounded-t-2xl' src={Major}/>
            <p className='text-center pt-2'>Major-Project</p>
        </div></Tilt></button>

        <p className='text-white pt-32 text-5xl text-center font-urbanist'>Explore our services and choose the one that best fits your journey.
Whether it's assignments, lab work, or projects we've got you covered!</p>
        </Vortex>
    </div>
  )
}

export default main_part_card