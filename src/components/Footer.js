import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="md:mx-40 mx-12 flex justify-between pb-4">
        <Link to="/">
          <h2 className="logo">Abc Company</h2>
        </Link>

        <span>Copyright © 2022 abc company</span>
      </div>
    </div>
  );
};

export default Footer;
<h2 className="font-['Dancing Script'] logo">Abc Company</h2>;
