import { SVGProps, useRef } from "react"
import { JSX } from "react/jsx-runtime"
import { Confetti, type ConfettiRef } from "../magicui/confetti";
import { useNavigate } from "react-router-dom";

import {
  Card,
} from "../ui/card"

export const Confirmation = () => {
    const confettiRef = useRef<ConfettiRef>(null);
    const deliveryDate = localStorage.getItem("deliveryDate");
    const show_date = deliveryDate?.slice(0, 10 )
    const campus = localStorage.getItem("campusYr")
    const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center ">
        <Card className="max-w-md w-full space-y-1 p-6 bg-[#f7efd8] rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <CircleCheckIcon className="text-[#00df9a] h-16 w-16" />
            <Confetti ref={confettiRef} className="absolute left-0 top-0 z-0 size-full" onMouseEnter={() => {confettiRef.current?.fire({});}}/>
          <h1 className="text-3xl font-bold text-black mt-4">Payment Successful</h1>
          <p className="text-[#301934] text-center dark:text-gray-400 mt-2">
            Your delivery is scheduled for <b>{show_date}</b> Thank you for your payment. Your order has been placed successfully
          </p>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 space-y-4">
            <p className="text-[#301934] text-center dark:text-gray-400 mt-2">
                The delivery point details for your selected campus will be sent to you via WhatsApp.
            </p>
          <div className="flex justify-between">
            <span className="text-gray-500 dark:text-gray-400">Selected Campus:</span>
            <span className="font-medium text-black dark:text-gray-50">{campus}</span>
          </div>
           <div className="flex justify-between">
            <span className="text-gray-500 dark:text-gray-400">Amount Paid:</span>
            <span className="font-medium text-black">₹500</span>
          </div>
          <div className="flex justify-center">
            <button onClick={() => navigate('/')} className="inline-flex items-center justify-center px-16 bg-[#00df9a] py-2 rounded-3xl text-lg font-semibold text-white">Home</button>
          </div>
        </div>
        <div className="flex justify-center">
        </div>
      </Card>
    </div>
  )
}

function CircleCheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}
export default Confirmation