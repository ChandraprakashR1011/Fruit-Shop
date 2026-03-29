import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";

const FruitsCard = ({ item }) => {
  const { addToCart } = useContext(CartContext);

  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    if (loading) return;

    setLoading(true);

    setTimeout(() => {
      addToCart(item);
      setLoading(false);
      setAdded(true);

      setTimeout(() => setAdded(false), 1500);
    }, 600);
  };

  return (
    <div className="rounded-2xl overflow-hidden shadow-lg transform group hover:scale-110 duration-100 relative flex flex-col">
      
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-52 object-cover"
      />

      <div className="flex flex-col items-center pt-2 flex-1 justify-between">
        <span className="font-body text-slate-500 block">{item.name}</span>
        <span className="font-body text-slate-500">₹{item.price}</span>

        <div className="w-full mt-2">
          <button
            onClick={handleAdd}
            className={`w-full py-3 text-white text-sm rounded-b-2xl transition relative flex items-center justify-center overflow-hidden
              ${
                added
                  ? "bg-green-700"
                  : "bg-green-500 hover:bg-green-600"
              }`}
          >
            {/* Ripple */}
            <span className="absolute inset-0 bg-white opacity-0 active:opacity-20 transition duration-300"></span>

            {/* STATES */}
            {loading ? (
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            ) : added ? (
              <span>Added ✓</span>
            ) : (
              <span>Add to Cart</span>
            )}

            {/* ARROW */}
            {!loading && !added && (
                <span className="absolute right-4 text-2xl font-extrabold transition-transform group-hover:translate-x-1">
                  →
                </span>
            )}
          </button>
        </div>
      </div>

      {item.offer &&  
              <span className="absolute top-3 right-3 bg-sky-300 text-white p-1 rounded-lg text-sm">
              {item.offer}
              </span>
      }
    </div>
  );
};

export default FruitsCard;