import React from "react";

const Header = () => {
  return (
    <div className="bg-black sticky top-0">
      <div className="md:mx-60 mx-12 py-6 text-white flex justify-between  items-center">
        <img src="assets/eco-logo.png" alt="logo" />
        <div className="text-lg">
          <span className="cursor-pointer">Privacy Policy</span>
          <span className="ml-8 cursor-pointer">Terms</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
