import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import { addDays, subDays } from 'react-datepicker/dist/date_utils.d';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import '@coreui/coreui-pro/dist/css/coreui.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { Test } from './Test/test';
import { yupResolver } from "@hookform/resolvers/yup";
import { infoSchema } from "./login-sin/validationSchema";
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "./components/Verification/firebase";
import { useForm } from 'react-hook-form';
import axios from 'axios';

declare global {
  interface Window {
    recaptchaVerifier: any;
  }
}


export const Info = () => {
const [user, setUser] = useState<{
  name: string;
  email: string;
  phone: string;
  date: Date | null;
  pdf: string;
  select: { value: string; label: string } | null;
}>({
  name: '',
  email: '',
  phone: '',
  date: null,
  pdf: '',
  select: null,
});

  const [file, setFile] = useState<File | null>(null);
  const [, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState("");
  const navigate = useNavigate();
  const [recaptchaVerifier, setRecaptchaVerifier] = useState<RecaptchaVerifier | null>(null);

  const {
    register,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(infoSchema),
  });

  // Date Picker Handler
  const handleDateChange = (dateselected: Date | null) => { 
    setUser(prevUser => ({ ...prevUser, date: dateselected }));
  };
  
  // Email Validation
  const validateEmail = (email: string) => /^[a-zA-Z0-9._%+-]+@srmist\.edu\.in$/.test(email);

  // Input Change Handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  const sendOTP = async (phoneNumber: string) => {
      try {
    const recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
      size: "invisible",
    });

    const confirmationResult = await signInWithPhoneNumber(
      auth,
      `+91${phoneNumber}`,
      recaptchaVerifier
    );

    // ✅ store it safely in window object
    (window as any).confirmationResult = confirmationResult;
  } catch (error: any) {
    console.error("OTP Error:", error);
  }
};



  // Select Dropdown Change Handler
  const handleSelectChange = (selectedOption: { value: string; label: string } | null) => {
    setUser(prevUser => ({ ...prevUser, select: selectedOption }));
  };

  // File Handler
  const handleFile = (file: File) => {
    setFile(file);
    setFileName(file.name);
    if (file.type !== "application/pdf") {
      toast.error("Only PDF files are allowed.");
    return;
  }
  };
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateEmail(user.email)) {
    toast.error("Please enter a valid College Email Address");
    return;
  }

  if (!file) {
    toast.error("No file selected");
    return;
  }

  if (!user.name || !user.email || !user.phone || !user.date || !user.select) {
    toast.error("All fields are required!");
    return;
  }

  setIsSubmitting(true);
  const toastId = toast.loading("Uploading...");

  try {
    // 1. Upload file
    const formData = new FormData();
    formData.append("file", file);

    const fileUploadResponse = await axios.post(
      "http://localhost:5200/Pending/upload-pdf",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    const { pageCount, pdf } = fileUploadResponse.data;

    if (!pdf?.fileUrl || !pageCount) {
      toast.update(toastId, {
        render: "File upload failed",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
      return;
    }

    // 2. Save user data
    const userData = {
      name: user.name,
      email: user.email,
      phone: user.phone,
      date: user.date ? new Date(user.date).toISOString() : null,
      pdf: { fileUrl: pdf.fileUrl },
      select: user.select?.value || null,
    };

    const response = await axios.post(
      "http://localhost:5200/Pending/save-user-data",
      userData,
      { headers: { "Content-Type": "application/json" } }
    );

    if (response.status !== 200) {
      toast.update(toastId, {
        render: "Failed to save user data",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
      return;
    }

    // 3. Store locally
    localStorage.setItem("fileName", pdf.fileUrl);
    localStorage.setItem("pageCount", pageCount.toString());
    localStorage.setItem("deliveryDate", user.date.toISOString());

    // 4. Send OTP
    try {
      await sendOTP(user.phone); // Ensure this is a working Promise
    } catch (otpError) {
      toast.update(toastId, {
        render: "Failed to send OTP. Please check your number.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
      return;
    }

    // 5. Final Toast and Redirect
    toast.update(toastId, {
      render: "OTP sent successfully ✅",
      type: "success",
      isLoading: false,
      autoClose: 1000,
      onClose: () => navigate("/Verification"),
    });

  } catch (error) {
    console.error("Error submitting form:", error);
    toast.update(toastId, {
      render: "Something went wrong",
      type: "error",
      isLoading: false,
      autoClose: 3000,
    });
  } finally {
    setIsSubmitting(false);
  }
};
  // Select Options
  const options = [
    { value: 'Chennai_Campus', label: 'SRM University-Chennai' },
    { value: 'NCR_Campus', label: 'SRM IST-Delhi NCR Campus' },
    { value: 'AP_Campus', label: 'SRM IST-AP' },
    { value: 'Sonipat_Campus', label: 'SRM University Sonipat' },
  ];

  return (
    <div className="relative flex h-screen w-full">
      <div id="recaptcha-container"></div>
      {/* Left Side - File Upload */}
      <div className="w-1/2 flex flex-col items-center justify-center bg-gradient-to-r from-[#3c50e0] to-[#00df9a] text-white p-10">
        <p className="text-4xl font-bold font-Manrope text-center">Upload the question paper of the assignment</p>
        <Test handleFile={handleFile} />
        {fileName ? <p>Uploaded File: {fileName}</p> : <p>No file selected</p>}
      </div>

      {/* Right Side - Form */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        <form onSubmit={handleSubmit} {...register("file")} className="flex flex-col w-4/6 text-center py-10 px-10">
          <p className="text-5xl font-semibold text-[#00df9a] font-Manrope">Basic Information</p>

          <input
            type="text"
            {...register("name")}
            name="name"
            value={user.name}
            onChange={handleChange}
            className="mt-3 outline-none pl-5 h-12 bg-[#eaeaea] rounded-md"
            placeholder="Name"
            alt="name"
            required
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

          <input
            type="email"
            {...register("email")}
            name="email"
            value={user.email}
            onChange={handleChange}
            className="mt-3 outline-none h-12 pl-5 bg-[#eaeaea] rounded-md"
            placeholder="College Email"
            alt="email"
            required
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          <input
            type="tel"
            {...register("phone")}
            name="phone"
            value={user.phone}
            onChange={handleChange}
            className="mt-3 outline-none pl-5 h-12 bg-[#eaeaea] rounded-md"
            placeholder="Phone"
            alt="phone"
            required
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}

          <DatePicker
            selected={user.date}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()} 
            maxDate={addDays(new Date(), 10)}        
            className="mt-3 outline-none h-12 pl-5 w-full bg-[#eaeaea] rounded-md"
            isClearable
            placeholderText="Date and Time of Delivery"
            required
          />

          <Select
            value={user.select}
            onChange={handleSelectChange}
            className="mt-3 text-left"
            name="select"
            options={options}
            required
          />

          <button type="submit" className="mt-8 rounded-xl w-96 h-11 font-medium text-white bg-[#00df9a] mx-auto">
            NEXT STEP
          </button>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Info;