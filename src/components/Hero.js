import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div className="bg-black  text-white">
      <div className="md:mx-60 mx-12 md:py-28 py-10  flex flex-col text-white text-center gap-6 items-center">
        <span className="text-center items-center font-bold md:text-5xl text-3xl">
          Not a long quote, <span className="text-[#a20916]">Abc Company </span>
        </span>
        <span className=" text-gray-300 text-center items-center text-3xl ">
          Protect The World By Keeping Your Actions Ecological and show this is
          the world we want to live
        </span>

        <AnchorLink href="#features">
          <button
            className="bg-white cursor-pointer hover:bg-transparent hover:text-white font-bold text-lg text-black hover:bg-gray-300
          py-3 px-8 tracking-wider rounded border-2 border-red-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            Explore
          </button>
        </AnchorLink>

        <img
          src="assets/hero.jpg"
          className="md:h-[400px] mt-6 rounded-lg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
