import perimg from '../../../src/assets/app-icon-person.png'

function people() {
  return (
    <div className=" flex flex-col ml-10 mt-[6px] justify-evenly w-[94.8%] bg-[#301934] rounded-b-3xl mb-10 py-10 px-4">
        <div className=' flex flex-row justify-evenly'>
        <div className="w-[19rem] h-[22rem] rounded-[30px] gap-10 items-center flex flex-col justify-center bg-[#ece5e5] shadow-[inset_0_30px_50px_-12px_rgba(50,50,93,0.25),inset_0_18px_26px_-18px_rgba(0,0,0,0.3)]">
          <img className="h-56 w-56" src={perimg}/>
          <h1 className="text-xl font-urbanist text-center">SRM IST Delhi-NCR Campus, Ghaziabad</h1>
        </div>
        <div className="w-[19rem] h-[22rem] rounded-[30px] gap-10 items-center flex flex-col justify-center bg-[#ece5e5] shadow-[inset_0_30px_50px_-12px_rgba(50,50,93,0.25),inset_0_18px_26px_-18px_rgba(0,0,0,0.3)]">
          <img className="h-56 w-56" src={perimg}/>
          <h1 className="text-xl font-urbanist text-center">SRM University, Kattankulathur</h1>
        </div>
        <div className="w-[19rem] h-[22rem] rounded-[30px] gap-10 items-center flex flex-col justify-center bg-[#ece5e5] shadow-[inset_0_30px_50px_-12px_rgba(50,50,93,0.25),inset_0_18px_26px_-18px_rgba(0,0,0,0.3)]">
          <img className="h-56 w-56" src={perimg}/>
          <h1 className="text-xl font-urbanist text-center">SRM University, Kattankulathur</h1>
        </div>
        <div className="w-[19rem] h-[22rem] rounded-[30px] gap-10 items-center flex flex-col justify-center bg-[#ece5e5] shadow-[inset_0_30px_50px_-12px_rgba(50,50,93,0.25),inset_0_18px_26px_-18px_rgba(0,0,0,0.3)]">
          <img className="h-56 w-56" src={perimg}/>
          <h1 className="text-xl font-urbanist text-center">SRM University, Kattankulathur</h1>
        </div>
        </div>
        <div className="flex flex-row text-5xl justify-center ">
          <p className='text-[#00df9a] mt-10 font-urbanist'>Made By SRMite, For SRMite</p>
        </div>
    </div>
  )
}

export default people