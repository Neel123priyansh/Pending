import React, { useEffect, useState } from "react";
import Header from "../Header/header";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import header from "../Header/header";
import { Currency } from "lucide-react";
import { colors } from "node_modules/react-select/dist/declarations/src/theme";
export const Check = () => {
useEffect(() => {
  // Push a dummy entry to the history stack
  window.history.pushState(null, "", window.location.href);

  const preventBack = () => {
    window.history.pushState(null, "", window.location.href);
  };

  window.addEventListener("popstate", preventBack);

  return () => {
    window.removeEventListener("popstate", preventBack);
  };
}, []);

  const [amount, setAmount] = useState(1);
  const [price, setPrice] = useState<number | null>(null);
  const [pdfName, setPdfName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [pageCount, setPageCount] = useState<number>(0);
  const [deliveryDate, setDeliveryDate] = useState("");
  const navigate = useNavigate();
  const increaseAmount = () => setAmount((prev) => prev + 1);
  const decreaseAmount = () => setAmount((prev) => (prev > 1 ? prev - 1 : 1));
  const [isAllowed, setIsAllowed] = useState(false);
  const [responseId, setResponseId] = React.useState("");
  const [responseState, setResponseState] = React.useState([])

  const loadScript = (src: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
    });
  };

  useEffect(() => {
  const calculatePrice = async () => {
    const pageCount = localStorage.getItem("pageCount");
    const deliveryDate = localStorage.getItem("deliveryDate");
    const storedPdfName = localStorage.getItem("fileName");

    if (storedPdfName) setPdfName(storedPdfName);

    if (!storedPdfName || !pageCount) {
      toast.error("Please upload a file first!");
      navigate("/Info-Page");
      return;
    } else {
      setIsAllowed(true);
    }

    if (!pageCount || !deliveryDate) {
      toast.error("Missing data for price calculation");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5200/Pending/calculate-price", {
        pageCount,
        deliveryDate,
      });

      setPrice(res.data.totalPrice);

    } catch (err) {
      console.error("Failed to calculate price:", err);
      toast.error("Price calculation failed");
    }

    // Optional: If orders endpoint is needed
    try {
      const response = await axios.post("http://localhost:5200/Pending/orders", {
        pageCount,
        deliveryDate,
      }, {
        headers: { 'Content-Type': 'application/json' }
      });
      console.log("Order response", response.data);
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  calculatePrice();
}, []);


//   useEffect(() => {
//   const fetchPrice = async () => {
//     try {
//       const res = await axios.post("http://localhost:5200/Pending/calculate-price", {
//         pageCount,
//         deliveryDate,
//       });

//       setPrice(res.data.totalPrice);
//     } catch (err) {
//       console.error("Failed to calculate price:", err);
//       toast.error("Price calculation failed");
//     }
//     const config = {
//       method: "post",
//       maxBodyLength: Infinity,
//       url: "http://localhost:5200/Pending/orders",
//       headers: {
//         'Content-Type': 'application/json'
//       },
//     };
//     axios.request(config).then((response) => {
//       console.log("Order created:", response.data);
//     })
//     .catch((error) => {
//       console.log("Order creation error:", error);
//     });
//       fetchPrice();
//   }
//  }, [])

const handleRazorpayScreen = async (amount: number) => {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
  if (!res) {
    alert("Razorpay SDK failed to load. Are you online?");
    return;
  }

  const options = {
    key: 'rzp_test_Vgm7xXg4o6KnWQ', // your test key
    amount: amount * 100, // in paise
    currency: 'INR',
    name: "Pending",
    description: "Payment for PDF service",
    handler: function (response: { razorpay_payment_id: string }) {
      setResponseId(response.razorpay_payment_id);
  
      localStorage.removeItem("fileName");
      localStorage.removeItem("pageCount");
      localStorage.removeItem("deliveryDate");
      toast.success("Payment successful ✅");
    },
    prefill: {
      name: 'Pending',
      email: 'neelpriyansh@gmail.com',
    },
    theme: {
      color: '#00df9a',
    },
  };

  const paymentObject = new (window as any).Razorpay(options);
  paymentObject.open();
};

  return (
    <>
    <Header />  
      <div className="flex h-screen items-center font-work-sans justify-center">
        <div className="w-8/12 shadow-2xl rounded-2xl h-3/5 bg-[#f7efd8]">
          <div className="bg-[#2d2d2c] flex justify-between items-center px-6 h-24 rounded-t-2xl">
            <p className="text-white text-2xl">Cart Calculation</p>
            <button className="bg-red-500 flex items-center gap-2 rounded-md w-32 h-11 text-white">
              <RiDeleteBin5Line className="ml-1 size-5" />
              Empty Cart
            </button>
          </div>

          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left dark:text-black-400">
              <thead className="text-base text-black uppercase">
                <tr>
                  <th className="px-6 py-3">Action</th>
                  <th className="px-6 py-3">Product</th>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Price</th>
                  <th className="px-6 py-3">Qty</th>
                  <th className="px-6 py-3">Total Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-y bg-[#f7efd8] dark:border-green-600">
                  <td className="px-6 py-4">
                    <button className="bg-red-400 h-12 w-11 rounded-md">
                      <RiDeleteBin5Line className="text-white mx-auto size-7" />
                    </button>
                  </td>
                  <td className="px-6 py-4">Assignment</td>
                  <td className="px-6 py-4">{pdfName ? <p>{pdfName}</p> : <p>Loading...</p>}</td>
                  <td className="px-6 py-4">
                    <td className="px-6 py-4">{price !== null ? `₹${(price).toFixed(2)}` : "Calculating..."}
                    </td>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <button onClick={decreaseAmount} className="bg-cyan-300 h-10 w-11 rounded-sm">
                        <FaMinus className="mx-auto text-cyan-700" />
                      </button>
                      <input
                        type="text"
                        value={amount}
                        readOnly
                        className="w-16 text-center font-medium border border-slate-950 h-10 mx-1"
                      />
                      <button onClick={increaseAmount} className="bg-cyan-300 h-10 w-11 rounded-sm">
                        <FaPlus className="mx-auto text-cyan-700" />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-green-700">
                    {price !== null ? `₹${(price * amount).toFixed(2)}` : "Calculating..."} 
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="text-gray-900 dark:text-black">
                  <th className="px-6 py-4 text-base">Total: {price !== null ? `₹${(price * amount).toFixed(2)}` : "Calculating..."}</th>
                  <td></td>
                  <td></td>
                  <td className="font-semibold px-6 py-3">Item in Cart: 1</td>
                  <td></td>
                  <td>
                    <button onClick={() => handleRazorpayScreen(price ?? 0)} className="bg-green-700 rounded-md w-28 ml-5 h-11 text-white">
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
