import React from "react";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsJustify,
  BsPersonCircle,
  BsSearch,
} from "react-icons/bs";

const AdminHeader = () => {
  return (
    <header className="flex justify-between items-center h-15 p-5 text-2xl">
      <div>
        <BsJustify />
      </div>
      <div>
        <BsSearch />
      </div>
      <div className="flex gap-8">
        <BsFillBellFill />
        <BsFillEnvelopeFill />
        <BsPersonCircle />
      </div>
    </header>
  );
};

export default AdminHeader;
