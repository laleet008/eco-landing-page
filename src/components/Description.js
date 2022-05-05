import React from "react";

const Description = () => {
  return (
    <div className="desc-page text-white py-2">
      <div className="md:mx-40 mx-12 md:py-20 py-8 flex md:flex-row flex-col gap-12 justify-between">
        <div className="flex flex-col justify-center ">
          <span className="md:text-3xl text-2xl font-bold">
            Where goal meets results
          </span>
          <div className="md:w-[400px] w-full md:text-xl text-lg mt-6">
            <p>
              Act on your goals with your full focus. Change your habits and get
              results. Let us help you achieve your goals
            </p>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src="assets/office.jpg" className="rounded-lg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Description;
