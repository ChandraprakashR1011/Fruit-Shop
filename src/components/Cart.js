import { useContext } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";



const Cart = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty } =
    useContext(CartContext);

    const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
//🛒 
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 mt-4">
      <h1 className="text-2xl md:text-3xl font-body mb-6 text-center text-slate-500 ">
        Your Cart
      </h1>
      

      {cart.length === 0 ? (
        <div className="flex justify-center items-center h-[60vh]">
          <p className="text-gray-500 text-lg">Your cart is empty</p>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          
          {/* LEFT - ITEMS */}
          <div className="md:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white p-4 rounded-2xl shadow gap-4"
              >
                
                {/* LEFT → Image + Name */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h2 className=" text-lg text-slate-500 font-body ">{item.name}</h2>
                    <p className="text-gray-500">₹{item.price}</p>
                  </div>
                </div>

                {/* RIGHT → Quantity + Remove */}
                <div className="flex items-center gap-4 justify-end">
                  
                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    
                    <button
                      onClick={() => decreaseQty(item.id)}
                      disabled={item.quantity === 1}
                      className={`w-8 h-8 flex items-center justify-center rounded-lg 
                        ${
                          item.quantity === 1
                            ? "bg-gray-100 cursor-not-allowed"
                            : "bg-gray-200 hover:bg-gray-300"
                        }`}
                    >
                      -
                    </button>

                    <span className="px-3 py-1 bg-gray-100 rounded-lg">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="w-8 h-8 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-lg"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                  >
                    Remove
                  </button>

                </div>
              </div>
            ))}
          </div>

          {/* RIGHT - SUMMARY */}
          <div className="bg-white p-6 rounded-2xl shadow h-fit">
            <h2 className="text-xl font-body mb-4 text-slate-600 ">Order Summary</h2>

            <div className="flex justify-between mb-2 text-slate-500 ">
              <span>Total Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="flex justify-between mb-2 text-slate-500 ">
              <span>Platform Fee</span>
              <span>₹2.50</span>
            </div>            

            <div className="flex justify-between font-body text-lg mb-4 text-slate-600 ">
              <span>Total Price</span>
              <span>₹{totalPrice + 2.5}</span>
            </div>

            <button
              onClick={() => navigate("/address")}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl transition"
            >
              Proceed to Checkout
            </button>
            {/* MAP LOCATION */}
              <div className="bg-white p-4 rounded-2xl shadow h-fit mt-4">
                <h2 className="text-lg font-body mb-3 text-slate-600">Shop Location</h2>

                <div className="w-full h-48 rounded-xl overflow-hidden">
                  <iframe
                    title="shop-location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3463704764263!2d76.99059647461658!3d11.012617889150874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265d0f0e202dd%3A0x6c1cb249318c77f!2sHindusthan%20college%20of%20arts%20and%20science!5e0!3m2!1sen!2sin!4v1774683995898!5m2!1sen!2sin"
                    className="w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default Cart;