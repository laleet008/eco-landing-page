import React from "react";
import { MdSecurity } from "react-icons/md";

const Features = () => {
  return (
    <div className="bg-black text-white " id="features">
      <div className="md:mx-40 mx-12 md:py-28 py-10  flex flex-col text-white text-center gap-6 items-center">
        <span className="text-center items-center font-bold md:text-4xl text-2xl">
          Our Work Ethics
        </span>
        <span className=" text-gray-300 text-center items-center md:text-3xl text-2xl">
          We work keeping in mind the needs of the users and the security. some
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nulla
          nam sed.
        </span>

        <div className="flex w-full justify-between mt-8 ">
          <div className="flex flex-col gap-4 justify-center items-center">
            <MdSecurity className="md:text-5xl text-3xl text-red-500" />
            <span className="text-center items-center font-bold md:text-2xl text-xl">
              Security
            </span>
            <span className=" text-gray-300 text-center md:text-xl text-lg">
              Bunch of Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium dicta aspernatur ad repellendus consequuntur quidem .
            </span>
          </div>

          <div className="flex flex-col gap-4 justify-center items-center">
            <MdSecurity className="md:text-5xl text-3xl text-red-500" />
            <span className="text-center items-center font-bold md:text-2xl text-xl">
              Security
            </span>
            <span className=" text-gray-300  md:text-xl text-lg ">
              Bunch of Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium dicta aspernatur ad repellendus consequuntur quidem
            </span>
          </div>

          <div className="flex flex-col gap-4 justify-center items-center">
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
