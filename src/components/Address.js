import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Address = () => {
  const navigate = useNavigate();

  const [address, setAddress] = useState("");

  const handleNext = () => {
    if (!address) {
      alert("Please enter address");
      return;
    }
    navigate("/payment");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <h1 className="text-2xl font-body text-slate-500 mb-5">Enter Delivery Address</h1>

      <textarea
        placeholder="Enter your address..."
        className="w-80 p-3 border rounded-lg"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <button
        onClick={handleNext}
        className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg"
      >
        Next
      </button>
    </div>
  );
};

export default Address;