import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "./CartContext";

export const Appbar = () => {
  const [open, setOpen] = useState(false);

  const menuClicked = () => {
    setOpen(!open);
  };

  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="mt-5">
      <div className="md:flex justify-between md:max-w-7xl mx-auto w-5/6">
        
        {/* LOGO */}
        <div className="flex justify-between">
          <div>
            <span className="text-green-500 font-bold text-4xl"> Fruit</span>
            <span className="text-slate-500 font-thin text-3xl">Shop</span>
          </div>

          {/* MOBILE MENU */}
          <div className="md:hidden mt-2">
            <button onClick={menuClicked}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* NAV ITEMS */}
        <div className={`flex justify-end ${open ? "block" : "hidden"} md:block`}>
          <ul className="md:flex md:space-x-8 space-y-8 md:space-y-0 pt-1">

            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `menu font-body py-2 px-4 ${
                    isActive ? "border-b-4 border-green-500" : ""
                  }`
                }
              >
                Fruits
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/vegetables"
                className={({ isActive }) =>
                  `menu font-body py-2 px-4 ${
                    isActive ? "border-b-4 border-green-500" : ""
                  }`
                }
              >
                Vegetables
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/juice"
                className={({ isActive }) =>
                  `menu font-body py-2 px-4 ${
                    isActive ? "border-b-4 border-green-500" : ""
                  }`
                }
              >
                Juices
              </NavLink>
            </li>

            {/* CART */}
            <li className="px-4 py-0.5">
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `font-body ${
                    isActive ? "border-b-4 border-green-500" : ""
                  }`
                }
              >
                <div className="relative inline-block">
                  
                  {/* CART ICON */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25h11.218M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0Z"
                    />
                  </svg>

                  {/* BADGE */}
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {totalItems}
                    </span>
                  )}

                </div>
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};