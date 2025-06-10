import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ConfirmationResult } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";

const OTPverf: React.FC = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const confirmationResult = (window as any).confirmationResult;

    if (!confirmationResult) {
      toast.error("No OTP confirmation found. Please try again.");
      return;
    }

    try {
      const result = await confirmationResult.confirm(otp); // ✅ verify OTP
      const user = result.user;
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
    <div className="flex items-center justify-center h-screen bg-[#f9f9f9]">
      <form
        onSubmit={handleOtpSubmit}
        className="flex flex-col bg-white p-10 rounded-lg shadow-lg w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-center mb-4 text-[#00df9a]">Verify OTP</h1>

        <input
          type="text"
          maxLength={6}
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter 6-digit OTP"
          className="border rounded-md px-4 py-3 text-lg text-center tracking-widest focus:outline-none"
          required
        />

        <button
          type="submit"
          className="bg-[#00df9a] text-white mt-6 py-3 text-lg font-semibold rounded-md hover:bg-[#00c78c] transition"
        >
          Verify
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default OTPverf;
