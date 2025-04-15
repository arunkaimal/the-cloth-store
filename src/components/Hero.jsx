import React, { useEffect, useState } from "react";
import woman_hero from "../assets/images/woman_hero.jpg";
import { Link } from "react-router-dom";


const Hero = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 30 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-600 mr-3"></div>New Trend
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4 ">
            SUMMER SALE STYLISH <br />
            <span className="font-semibold">WOMENS</span>
          </h1>
          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-2 "
          >
            dicover more
          </Link>
        </div>
        <div className="hidden lg:block">
          <img
            src={woman_hero}
            className={`${isActive?"opacity-80 scale-105 ":"opacity-10"} w-lg rounded-full transition duration-500`}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
