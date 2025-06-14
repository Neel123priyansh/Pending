import Ass from '../../assets/Ass.jpeg'
import Lab from '../../assets/Lab.jpeg'
import Mini from '../../assets/Mini.jpeg'
import Major from '../../assets/Major.jpeg'
import { Tilt } from 'react-tilt'
import { useNavigate} from "react-router-dom" 

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
    <div className='flex flex-row justify-evenly items-center bg-black rounded-2xl max-w-[100%] h-[100%]'>
       <button onClick={() => navigate('Info-Page') }>
        <Tilt options={defaultOptions}>
            <div className='h-[320px] rounded-2xl w-[240px] font-work-sans text-2xl text-white bg-[#6B7280]'>
            <img className='rounded-t-2xl ' src={Ass}/>
            <p className='pr-16 pt-2'>Assingment</p> 
        </div>
        </Tilt>
        </button>
        <button><Tilt options={defaultOptions}><div className='h-[320px] rounded-2xl w-[240px] text-2xl font-work-sans text-white bg-[#6B7280] mx-auto '>
            <img className='rounded-t-2xl' src={Lab}/>
            <p className='pr-20 pt-2'>Lab File</p>
        </div></Tilt></button>
        <button> <Tilt options={defaultOptions}><div className='h-[320px] rounded-2xl w-[240px] text-2xl text-white font-work-sans bg-[#6B7280]'>
            <img className='rounded-t-2xl' src={Mini}/>
            <p className='pr-16 pt-2'>Mini-Project</p>
        </div></Tilt></button>
        <button><Tilt options={defaultOptions}><div className='h-[320px] rounded-2xl w-[240px] text-2xl text-white bg-[#6B7280] font-work-sans mx-auto'>
            <img className='rounded-t-2xl' src={Major}/>
            <p className='pr-16 pt-2'>Major-Project</p>
        </div></Tilt></button>
    </div>
  )
}

export default main_part_card