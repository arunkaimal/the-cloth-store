import React from "react";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  const { id, title, image, price, amount } = item;
  return (
    <>
      <div className="flex">
        <div className="w-full min-h-[150px] flex items-center gap-x-3">
          <Link to={`/product/${id}`}>
            <img className="max-w-[80px] mt-2" src={image} alt="" />
          </Link>
          <div className="w-full flex flex-col">
            {/* title and remove icon */}
            <div className="flex justify-between mb-2">
              <Link
                to={`/product/${id}`}
                className="text-sm uppercase font-medium max-w[240px] text-gray-500 hover:underline "
              >
                {title}
              </Link>

              <div className="text-xl cursor-pointer">
                <IoMdClose className="text-gray-500 hover:text-red-500 transition duration-150" />
              </div>
            </div>
            <div className=" flex text-sm gap-x-2 h-[36px] ">
              {/* quantity */}
              <div className="flex flex-1 max-w-[100px] items-center h-full border border-gray-300 text-black font-medium">
                <div className="flex-1 h-full flex justify-center items-center cursor-pointer ">
                  <IoMdRemove />
                </div>
                <div className="h-full flex justify-center items-center px-2">
                  {amount}{" "}
                </div>
                <div className="flex-1 h-full flex justify-center items-center cursor-pointer">
                  <IoMdAdd />
                </div>
              </div>
              {/* Item Price */}
              <div>item price</div>
              {/* final price */}
              <div>final price</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
