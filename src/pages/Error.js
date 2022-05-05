import React from "react";
import Layout from "../components/Layout";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Layout>
      <div className="error-page text-white py-2">
        <div className="md:mx-40 mx-10 md:py-20 py-8  ">
          <div className="md:mx-40 mx-10 ">
            <div className="flex justify-center flex-col items-center h-96 relative mb-32">
              <div className="font-bold relative md:text-[250px] text-[180px] text-gray-400 opacity-20">
                404
              </div>
              <span className="absolute text-gray-200 font-bold md:text-7xl text-4xl tracking-widest	">
                Page Not Found
              </span>
              <Link to="/">
                <button className="flex py-2 px-4 text-black text-xl gap-4 bg-white border hover:bg-transparent hover:text-white border-gray-400 hover:border-gray-500 rounded-lg">
                  <FaArrowLeft className="md:block hidden mt-1" /> Back to Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Error;
