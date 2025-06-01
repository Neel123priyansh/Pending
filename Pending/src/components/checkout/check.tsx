import React, { useEffect, useState } from "react";
import Header from "../Header/header";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaMinus, FaPlus } from "react-icons/fa";
// import { useParams } from "react-router-dom";
// import axios from "axios";
export const Check = () => {
  const [amount, setAmount] = useState(1);
  const [price, setPrice] = useState(700);
  const [pdfName, setPdfName] = useState('');
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<any>(null);


  // useEffect(() => {
  //   const fetchPdfName = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:5200/Pending/get-pdf');
        
  //       if (response.data.status === 'okk') {
  //         const pdfData = response.data.data;
          
  //         if (pdfData.length > 0) {
  //           // Sort PDFs by upload time (newest first)
  //           const sortedPdfs = pdfData.sort(
  //             (a: any, b: any) => 
  //               new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime()
  //           );
  //           // Get the latest PDF name
  //           setPdfName(sortedPdfs[0].pdf);
  //         } else {
  //           setError('No PDFs found');
  //         }
  //       } else {
  //         setError('Failed to fetch PDFs');
  //       }
  //     } catch (err) {
  //       setError('Error fetching PDFs');
  //       console.error(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchPdfName();
  // }, []);

  useEffect(() => {
    const storedPdfName = localStorage.getItem('fileName');
    if (storedPdfName) {
      setPdfName(storedPdfName);
    }
  }, []);

  const increaseAmount = () => setAmount((prev) => prev + 1);
  const decreaseAmount = () => setAmount((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <>
      <Header />
      <div className="flex h-screen items-center font-work-sans justify-center">
        <div className="w-8/12 shadow-2xl rounded-2xl h-3/5 md:w-md lg:w-lg xl:w-xl bg-[#f7efd8]">
          <div className="bg-[#2d2d2c] justify-evenly items-center gap-x-[58%] flex flex-row h-24 w-[100%] rounded-t-2xl">
            <p className="text-white font-work-sans text-2xl">Cart Calculation</p>
            <button className="bg-red-500 flex flex-row gap-2 rounded-md w-32 items-center h-11 text-white">
              <RiDeleteBin5Line className="ml-1 size-5" />
              Empty Cart
            </button>
          </div>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right dark:text-black-400">
              <thead className="text-base text-black uppercase">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Qty
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-y bg-[#f7efd8] dark:border-green-600">
                  <th scope="row" className="px-6 max-w-screen-2xl py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <button className="bg-red-400 h-12 w-11 rounded-md">
                      <RiDeleteBin5Line className="text-white mx-auto size-7" />
                    </button>
                  </th>
                  <td className="px-6 py-4">Assignment</td>
                  <td className="px-6 py-4">
                    {pdfName ? <p>{pdfName}</p> : <p>Loading...</p>}
                  </td>
                  <td className="px-6 py-4">
                    <h1>₹{price}</h1>
                  </td>
                  <td>
                    <button onClick={decreaseAmount} className="bg-cyan-300 h-10 w-11 rounded-sm">
                      <FaMinus className="mx-auto text-cyan-700" />
                    </button>
                    <input
                      type="text"
                      value={amount}
                      readOnly
                      className="w-16 align-bottom rounded-sm font-medium mb-1 text-center border-slate-950 border-1 h-10 mx-1"
                    />
                    <button onClick={increaseAmount} className="bg-cyan-300 h-10 w-11 rounded-sm">
                      <FaPlus className="mx-auto text-cyan-700" />
                    </button>
                  </td>
                  <td className="px-6 py-4">₹{amount * price}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="relative text-gray-900 dark:text-black">
                  <th scope="row" className="px-6 py-4 text-base">Total</th>
                  <td className="px-6 py-3"></td>
                  <td className="px-6 py-3"></td>
                  <td className="font-semibold px-6 py-3">Item in Cart: 1</td>
                  <td className="font-semibold px-6 py-3">Total Price: ₹{amount * price}</td>
                  <td>
                    <button className="bg-green-700 rounded-md w-28 ml-5 items-center h-11 text-white">
                      CheckOut
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Check;
