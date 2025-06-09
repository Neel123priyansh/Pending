import React, { useEffect, useState } from 'react'
import Header from "../Header/header";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../Verification/firebase";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../@/components/ui/input-otp"
import { useNavigate } from 'react-router-dom';

export const OTPverf = () => {
    const navigate = useNavigate();
    const [resendCountDown, setResendCountdown] = useState(0)
    const [success, setSuccess] = useState("")

    useEffect(()=> {
      let timer: NodeJS.Timeout;
      if (resendCountDown > 0) {
        timer = setTimeout(() => setResendCountdown(resendCountDown - 1), 1000)
      }
      return () => clearTimeout(timer)
    }, [resendCountDown])

  return (
    <>
        <div className="flex h-screen items-center font-work-sans justify-center">
        <div className="w-2/5 shadow-2xl rounded-2xl h-3/5 p-6 bg-[#f7efd8]">
          <p className="text-[#00df9a] font-sans font-medium text-5xl">
            OTP Verification
          </p>
          <p className="text-[#74ef8d] font-sans text-lg mt-2">
            Please enter the OTP sent to your phone number to complete your verification
          </p>
            <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
              <InputOTPGroup className="justify-center px-28 mt-4"> {/* 👈 center and add spacing */}
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            <div className='flex flex-row justify-between mt-2'>
              <p>Remaining Time</p>
              <p>Didn't get the code?</p>
            </div>
          <button
            className="mt-9 w-full bg-[#00df9a] font-sans text-white font-bold py-2 px-4 rounded-full transition-all duration-200">
            Verify
          </button>
          <button
            className="mt-6 w-full border-[#00df9a] font-sans border-2 text-[#00df9a] font-bold py-2 px-4 rounded-full transition-all duration-200">
            Cancel
          </button>
        </div>
      </div>
    </>
  )
}

export default OTPverf


