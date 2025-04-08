import React from "react";

import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";

const Product = ({ product }) => {
  console.log(product);
  const { id, image, category, title, price } = product;

  return (
    <>
      <div className="w-full">
        <div className="group border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden transition">
          <div className="w-full h-full flex justify-center items-center">
            <div className="group w-[200px] mx-auto flex justify-center items-center ">
              <img
                className="max-h-[160px] group-hover:scale-110 cursor-pointer transition duration-300"
                src={image}
                alt=""
              />
            </div>
          </div>
          <div className="absolute top-6 -right-11 group-hover:right-1 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 tarnsition-all duration-300">
            <button>
              <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500 cursor-pointer">
                <BsPlus className="text-3xl" />
              </div>
            </button>

            <Link
              to={`/product/${id}`}
              className="w-12 h-12 flex justify-center items-center bg-white drop-shadow-xl"
            >
              <BsEyeFill className="  " />
            </Link>
          </div>
        </div>
        <div>
          <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
          <Link to={`/product/${id}`}>
            <h2 className="font-semibold mb-1">{title}</h2>
          </Link>
          <h2 className="font-semibold">$ {price}</h2>
        </div>
      </div>
    </>
  );
};

export default Product;
