import React, { useContext, useEffect, useState } from "react";

import { SidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import Logo from "../assets/icons/clothLogo.svg";
import Hero from "./Hero";

const Header = () => {
  const { itemAmt } = useContext(CartContext);
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  //header state
  const [isActive, setIsActive] = useState(false);

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
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex relative mr-5"
          >
            <div>
              <button className="bg-black text-white py-2 px-4 rounded-2xl mr-2">Login</button>
            </div>
            <BsBag className="cursor-pointer text-2xl mt-1" />
            <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white flex justify-center items-center rounded-full ">
              {itemAmt}{" "}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
