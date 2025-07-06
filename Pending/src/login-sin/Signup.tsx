import { useState } from 'react'
import { Meteors } from '../components/Particles/meteors'

export const Signup = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""

    })

    const handelinput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({
            ...user,
            [name]: value,
        })
    }

    const handelsubmit = (e) => {
        e.preventDefault();
        console.log(user)
    }

return (
    <div className='flex h-screen items-center justify-center'>
      <div className='relative bg-[#00df9a] w-7/12 flex flex-row-reverse rounded-2xl h-5/6 md:w-md lg:w-lg xl:w-xl shadow-2xl bg-gradient-to-r from-[#3c50e0] to-[#00df9a]'>
        <div className="relative w-1/3 overflow-hidden flex flex-col items-center justify-center">
          <Meteors number={30} className='mt-10 absolute inset-0 z-10'/>
          <p className="text-white font-bold text-4xl font-Manrope z-20">Welcome Back!</p>
          <p className="text-white text-base mt-9 items-center self-center max-w-[295px] font-Manrope w-max z-20">To keep connected with us please</p>
          <p className="text-white text-base items-center self-center max-w-[205px] font-Manrope w-max z-20">signin with your info.</p>
        </div>
        <form onSubmit={handelsubmit} className='bg-white flex flex-col font-Manrope h-full w-2/3 rounded-l-2xl text-center py-20 px-10'>
          <p className='text-5xl font-Manrope font-semibold text-[#00df9a]'>Sign in to Pending</p>
          <input type='email' value={user.email} onChange={handelinput} name='email' className='mt-20 outline-none h-12 pl-5 bg-[#eaeaea]' placeholder='College Email' alt='email'/>
          <input type='password' value={user.password} onChange={handelinput} name='password' className='mt-3 outline-none pl-5 h-12 bg-[#eaeaea]' placeholder='Password' alt='password'/>
          <button className='mt-10 font-Manrope rounded-3xl w-3/6 h-10 font-[500] text-white bg-[#00df9a] mx-auto'>SIGN IN</button>
        </form>
      </div>
    </div>
  )
}
