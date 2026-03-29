import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Payment = () => {
  const navigate = useNavigate();
  const[active, setActive] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-6">Select Payment Method</h1>

      <div className="space-y-3">
        <button onClick={()=> setActive("upi")} className={`block w-64 p-3 border rounded-lg ${active==="upi"?"bg-green-500 text-white":"bg-white"}`}>
          UPI
        </button>
        <button onClick={()=> setActive("card")} className={`block w-64 p-3 border rounded-lg ${active==="card"?"bg-green-500 text-white":"bg-white"}`}>
          Card
        </button>
        <button onClick={()=> setActive("cod")} className={`block w-64 p-3 border rounded-lg ${active==="cod"?"bg-green-500 text-white":"bg-white"}`}>
          Cash on Delivery
        </button>
      </div>

      <button
        onClick={() => navigate("/success")}
        className="mt-6 bg-green-500 text-white px-6 py-2 rounded-lg"
      >
        Pay Now
      </button>
    </div>
  );
};

export default Payment;