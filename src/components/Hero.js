import React from "react";

const Hero = () => {
  return (
    <div className="bg-black h-screen text-white">
      <div className="md:mx-60 mx-12 py-16  flex flex-col text-white text-center gap-4 items-center">
        <span className="font-['Catamaran'] text-center items-center text-4xl ">
          Eco Launcher.
        </span>
        <span className="font-['Catamaran'] text-gray-300 text-center items-center text-3xl ">
          Protect The World By Keeping Your Actions Ecological
        </span>
        <div className="relative md:ml-20">
          <img
            src="assets/image1.png"
            className="h-[400px] absolute top-0 right-20 rotate-[-8deg] hover:scale-110"
            alt="hero img"
          />
          <img
            src="assets/image2.png "
            className="h-[400px] rotate-[5deg] hover:scale-110"
            alt=""
          />
        </div>
        <div>
          <img
            src="assets/google-play.png"
            className="h-[60px] border border-gray-400 rounded hover:border-gray-600"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
