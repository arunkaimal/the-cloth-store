import React, { useContext } from "react";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { removeCart, increaseAmt, decreaseAmt } = useContext(CartContext);
  const { id, title, image, price, amount } = item;
  return (
    <>
      <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-400 w-full text-gray-500">
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

              <div
                onClick={() => removeCart(id)}
                className="text-xl cursor-pointer"
              >
                <IoMdClose className="text-gray-500 hover:text-red-500 transition duration-150" />
              </div>
            </div>
            <div className=" flex text-sm gap-x-2 h-[36px] ">
              {/* quantity */}
              <div className="flex flex-1 max-w-[100px] items-center h-full border border-gray-300 text-black font-medium">
                <div
                  onClick={() => decreaseAmt(id)}
                  className="flex-1 h-full flex justify-center items-center cursor-pointer "
                >
                  <IoMdRemove />
                </div>
                <div className="h-full flex justify-center items-center px-2">
                  {amount}{" "}
                </div>
                <div
                  onClick={() => increaseAmt(id)}
                  className="flex-1 h-full flex justify-center items-center cursor-pointer"
                >
                  <IoMdAdd />
                </div>
              </div>
              {/* Item Price */}
              <div className=" flex-1 flex justify-around items-center">
                $ {price}
              </div>
              {/* final price */}
              <div className="flex-1 h-full flex justify-end items-center font-medium">{`$ ${parseFloat(
                price * amount
              ).toFixed(2)}`}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
