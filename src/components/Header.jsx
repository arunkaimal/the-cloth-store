import React, { useContext } from "react";

import { SidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  return (
    <>
      <header className="bg-blue-200">
        <div>Header</div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <BsBag className="cursor-pointer text-2xl mt-1" />
        </div>
      </header>
    </>
  );
};

export default Header;
