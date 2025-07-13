import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../@/components/ui/input-otp"
import Headerwo from "../Header/header_wo";

const OTPverf: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(120);
  const [canResend, setCanResend] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (timeLeft <= 0) {
      setCanResend(true);
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleResend = async () => {
    try {
      resendOtp(); // Your resend function
      toast.success("OTP resent successfully!");
      setTimeLeft(120);
      setCanResend(false);
    } catch (error) {
      toast.error("Failed to resend OTP");
    }
  };

  const formatTime = (sec: number) => {
    const min = Math.floor(sec / 60);
    const seconds = sec % 60;
    return `${min}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const confirmationResult = (window as any).confirmationResult;

    if (!confirmationResult) {
      toast.error("No OTP confirmation found. Please try again.");
      return;
    }

    try {
      // const result = await confirmationResult.confirm(otp); // ✅ verify OTP
      // const user = result.user;
      toast.success("Phone verified successfully ✅");
      setTimeout(() => {
        navigate("/Check"); // Navigate to next step/page
      }, 2000);
    } catch (error) {
      console.error("OTP verification failed:", error);
      toast.error("Invalid OTP. Please try again.");
    }
  };

  return (
    <>
    <Headerwo />
    <div className="flex items-center justify-center font-urbanist h-screen bg-[#ece5e5]">
      <form
        onSubmit={handleOtpSubmit}
        className="flex flex-col bg-white p-5 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-3 text-[#301934]">Verify Your Phone Number</h1>
        <h1 className="text-xs text-center mb-4 text-[#301934]">Please enter the OTP sent to your registered phone number to complete your verification</h1>
        <div className="flex flex-col mt-3 ml-2">
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <div className="flex flex-row text-xs justify-between text-[#301934] mt-3">
          <p>Remaining Time: {formatTime(timeLeft)}</p>
          <p className="flex flex-row gap-1">Didn't get the code?
            <button type="button"
              className="text-[#00c78c] hover:underline"
              disabled={!canResend}
              onClick={handleResend}>{canResend ? "Resend Code" : "Resend Disabled"}</button>
          </p>
        </div>
        <button
          type="submit"
          className="bg-[#00df9a] rounded-full text-white mt-14 py-2 text-xl font-semibold hover:bg-[#00c78c] transition">
          Verify
        </button>
        <button
          type="submit"
          className="bg-white border-2 border-[#00df9a] mt-3 py-2 text-xl text-[#00df9a] font-semibold rounded-full hover:bg-[#00c78c] transition">
          Cancel
        </button>
      </form>

      <ToastContainer />
    </div></>
  );
};

export default OTPverf;
function resendOtp() {
  throw new Error("Function not implemented.");
}

