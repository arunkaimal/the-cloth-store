import React, { useContext, useEffect, useState } from "react";

import { SidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import Logo from "../assets/icons/clothLogo.svg";
import Hero from "./Hero";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Header = () => {
  const { itemAmt } = useContext(CartContext);
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  //destructuring authcontext
  const { isLoggedIn, logout, user } = useContext(AuthContext);

  //header state
  const [isActive, setIsActive] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <>
      <header
        className={`${
          isActive ? "bg-white shadow-md h-20" : "bg-none"
        } fixed w-full z-10 transition-all duration-700 `}
      >
        <div className="container mx-auto flex items-center justify-between h-full">
          <Link to={"/"}>
            <img src={Logo} alt="" className="w-[50px] " />
          </Link>
          <div>
            <h1
              className={`${
                isActive ? "text-emerald-900 tracking-wider" : "opacity-10"
              } text-3xl italic font-semibold transition-all duration-500 `}
            >
              The Cloth Store
            </h1>
          </div>
          <div className="flex items-center gap-10 mr-5 ">
            {isLoggedIn ? (
              <>
                <span className="text-sm font-medium text-gray-700">
                  Hello,{" "}
                  <span className="text-black font-semibold">
                    {user?.name || user?.email}
                  </span>
                </span>
                <button
                  onClick={() => {
                    logout();
                    navigate("/login");
                  }}
                  className="bg-red-600 text-white py-2 px-4 rounded-2xl cursor-pointer"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login">
                <button className="bg-black text-white py-2 px-4 rounded-2xl cursor-pointer">
                  Login
                </button>
              </Link>
            )}

            <div
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer flex relative mr-5"
            >
              <BsBag className="cursor-pointer text-2xl mt-1" />
              <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white flex justify-center items-center rounded-full ">
                {itemAmt}{" "}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
