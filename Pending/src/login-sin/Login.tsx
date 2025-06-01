import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import '@coreui/coreui-pro/dist/css/coreui.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [user, setUser] = useState({
    email: '',
    phone: '',
    date: null,
    select: null,
    name: '',
  });

  const navigate = useNavigate()

  const handleDateChange = (dateselected: Date | null) => {
    setUser({
      ...user,
      date: dateselected,
    });
  };

  const validateEmail = (email: string) => {
    // Regular expression to check if email ends with @srmist.edu.in
    const emailPattern = /^[a-zA-Z0-9._%+-]+@srmist\.edu\.in$/;
    return emailPattern.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSelectChange = (selectedOption: any) => {
    setUser({
      ...user,
      select: selectedOption.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(user.email)) {
      toast.error('Please enter a College Email Address');
      return;
    }

    console.log(user);
    const response = await fetch('http://localhost:5200/Pending/reg', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...user,
        date: user.date ? user.date.toISOString() : null, // Convert date to ISO string before sending to backend
      }),
    });

    const res_data = await response.json();
    if (response.ok) {
      toast.success("Login Successful",{
        onClose: () => navigate('/Upload')
      });
    } else {
      toast.error(res_data.extraDetail ? res_data.extraDetail : res_data.message);
      console.log("Invalid Credentials");
    }

    console.log(response);
  };

  const options = [
    { value: 'Chennai_Campus', label: 'SRM University-Chennai' },
    { value: 'NCR_Campus', label: 'SRM IST-Delhi NCR Campus' },
    { value: 'AP_Campus', label: 'SRM IST-AP' },
    { value: 'Sonipat_Campus', label: 'SRM University Sonipat' },
  ];

  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='relative bg-[#00df9a] w-7/12 flex flex-row-reverse rounded-2xl h-5/6 md:w-md lg:w-lg xl:w-xl shadow-2xl bg-gradient-to-r from-[#3c50e0] to-[#00df9a]'>
        <div className="relative w-1/3 overflow-hidden flex flex-col items-center justify-center">
          {/* <p className="text-white font-bold text-4xl font-Manrope z-20">Welcome!</p>
          <p className="text-white text-base mt-9 items-center self-center max-w-[295px] font-Manrope w-max z-20">Enter your basic information to get</p>
          <p className="text-white text-base items-center self-center max-w-[205px] font-Manrope w-max z-20">work and proceed further.</p> */}
        </div>
        <form onSubmit={handleSubmit} className='bg-white flex flex-col font-Manrope h-full w-2/3 rounded-l-2xl text-center py-10 px-10'>
          <p className='text-5xl font-Manrope font-semibold text-[#00df9a]'>Basic Informion</p>
          <input type='email' name='email' value={user.email} onChange={handleChange} className='mt-10 outline-none h-12 pl-5 bg-[#eaeaea]' placeholder='College Email' alt='email' />
          <input type='tel' name='phone' value={user.phone} onChange={handleChange} className='mt-3 outline-none pl-5 h-12 bg-[#eaeaea]' placeholder='Phone' alt='phone' />
          <DatePicker selected={user.date} onChange={handleDateChange} dateFormat="dd/MM/yyyy" className='mt-3 outline-none h-12 pl-5 w-[100%] bg-[#eaeaea]' isClearable placeholderText='Date of Delivery' />
          <Select value={options.find(option => option.value === user.select)} onChange={handleSelectChange} className='mt-3 rounded-s-3xl text-left' name='select' options={options} />
          <input type='name' value={user.name} name='name' className='mt-3 outline-none pl-5 h-12 bg-[#eaeaea]' onChange={handleChange} placeholder='Name' alt='name' />
          <button className='mt-8 font-Manrope rounded-3xl w-3/6 h-10 font-[500] text-white bg-[#00df9a] mx-auto'>SIGN IN</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
