import { useState } from 'react';
import Header from "../components/Header/header";
import { Test } from '../Test/test';
import axios from 'axios';
import { toast } from 'react-toastify';
import '@coreui/coreui-pro/dist/css/coreui.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export const Assin = () => {
  const [title] = useState("");
  const [file, setFile] = useState<File | null>(null); 
  const [fileName, setFileName] = useState("");
  const navigate = useNavigate()
  const [] = useState(null)

  const handleFile = (file: File) => {
    setFile(file); 
    setFileName(file.name);
  };

  const submitImage = async (_e: any) => {
    _e.preventDefault();

    if (!file) {
      console.log("File not selected");
      return;  
    }
    else{
      toast.success('File Uploaded', {
         onClose: () => navigate('/Check')
      })
    }       
    
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file); 

    try {
      const result = await axios.post("http://localhost:5200/Pending/upload-files", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(result.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <>
      <Header />
      <form className='text-[#3c50e0] flex flex-col justify-center items-center' onSubmit={submitImage}>
        <p className='mt-40 text-5xl font-work-sans font-bold'>Upload the question paper of the assignment</p>
        <Test handleFile={handleFile} />
        {fileName ? <p>Uploaded File: {fileName}</p> : <p>No file selected</p>} {/* Display file name if available */}
        {fileName ? (
          <button className='text-lg bg-[#2d2d2c] rounded-lg w-44 h-10 text-white font-bold font-Manrope'>Upload The PDF</button>
        ) : null}
      </form>
    </>
  );
};

export default Assin;
