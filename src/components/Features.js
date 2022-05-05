import React from "react";
import { MdSecurity } from "react-icons/md";

const Features = () => {
  return (
    <div className="feature-page text-white " id="features">
      <div className="md:mx-40 mx-12 md:py-28 py-10  flex flex-col text-white text-center gap-6 items-center">
        <span className="text-center items-center font-bold md:text-4xl text-3xl">
          Our Work Ethics
        </span>
        <span className=" text-gray-300 text-center items-center md:text-2xl text-xl">
          We work keeping in mind the needs of the users and the security. some
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nulla
          nam sed.
        </span>

        <div className="flex md:flex-row flex-col md:gap-6 gap-8 w-full  mt-8 ">
          <div className="flex flex-col md:gap-4 gap-2 justify-center max-w-1/3 items-center">
            <MdSecurity className="md:text-5xl text-3xl text-red-500" />
            <span className="text-center items-center font-bold md:text-2xl text-xl">
              Security
            </span>
            <span className=" text-gray-300 text-center md:text-xl text-lg">
              Bunch of Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium dicta aspernatur ad repellendus consequuntur quidem .
            </span>
          </div>

          <div className="flex flex-col md:gap-4 gap-2 justify-center max-w-1/3 items-center">
            <MdSecurity className="md:text-5xl text-3xl text-red-500" />
            <span className="text-center items-center font-bold md:text-2xl text-xl">
              Security
            </span>
            <span className=" text-gray-300  md:text-xl text-lg ">
              Bunch of Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium dicta aspernatur ad repellendus consequuntur quidem
            </span>
          </div>

          <div className="flex flex-col md:gap-4 gap-2 justify-center  max-w-1/3 items-center">
            <MdSecurity className="md:text-5xl text-3xl text-red-500" />
            <span className="text-center items-center font-bold md:text-2xl text-xl">
              Security
            </span>
            <span className=" text-gray-300 md:text-xl text-lg">
              Bunch of Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium dicta aspernatur ad repellendus consequuntur quidem
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
