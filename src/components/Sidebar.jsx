import React, { useContext } from "react";
//import Link
import { Link } from "react-router-dom";
//import icons
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

//import components
import CartItem from "../components/CartItem";

import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { cart, clearCart, total } = useContext(CartContext);
  const { isOpen, handleClose } = useContext(SidebarContext);
  return (
    <>
      <div
        className={` ${
          isOpen ? "right-0" : "-right-full"
        } w-full bg-white fixed top-0 shadow-2xl md:w-[35vw] xl:w-[30vw] h-screen transition-all duration-500 z-20 px-4 lg:px-[35px]`}
      >
        <div className="flex items-center justify-between py-6 border-b">
          <div className="uppercase text-sm font-semibold">
            Shopping Bag (0)
          </div>
          <div
            onClick={handleClose}
            className="cursor-pointer w-8 h-8 flex justify-center items-center"
          >
            <IoMdArrowForward className="text-2xl" />
          </div>
        </div>
        <div className=" flex flex-col gap-y-2 max-h-[200px] lg:max-h-[400px] overflow-y-auto overflow-x-hidden border-b">
          {cart.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </div>
        <div className="flex flex-col gap-y-3 py-4 mt-4">
          <div className="flex w-full justify-between items-center ">
            {/* Total */}
            <div className="uppercase font-semibold">
              <span className="mr-2">Total:</span> $ {total}
            </div>

            {/* Clear cart icon */}
            <div
              onClick={clearCart}
              className="bg-red-500 py-4 text-white w-10 h-10 flex justify-center items-center text-xl cursor-pointer mt-1 rounded"
            >
              <FiTrash2 />
            </div>
          </div>
          <div className="w-full bg-black text-white shadow-md text-center p-2 rounded hover:bg-white hover:text-black hover:border mt-5 transition duration-200 cursor-pointer">
            <button className="cursor-pointer ">Proceed To Payment</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
