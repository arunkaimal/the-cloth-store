import React, { useContext, useEffect, useState } from "react";

import { SidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import Logo from "../assets/icons/clothLogo.svg";

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
          isActive ? "bg-white shadow-md" : "bg-none"
        } fixed w-full z-10 transition-all duration-300 `}
      >
        <div className="container mx-auto flex items-center justify-between h-full">
          <Link to={"/"}>
            <img src={Logo} alt="" className="w-[50px] " />
          </Link>
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
      </header>
    </>
  );
};

export default Header;
