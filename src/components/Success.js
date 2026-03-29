import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl text-green-600 font-bold mb-4">
        🎉 Payment Successful!
      </h1>

      <button
        onClick={() => navigate("/")}
        className="bg-green-500 text-white px-6 py-2 rounded-lg"
      >
        Back to Home
      </button>
    </div>
  );
};

export default Success;