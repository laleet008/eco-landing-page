import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer text-white">
      <div className="md:mx-40 mx-12 flex flex-col md:flex-row md:gap-0 gap-4 justify-between pb-4 items-center">
        <Link to="/">
          <h2 className="logo">Abc Company</h2>
        </Link>

        <span>Copyright © {new Date().getFullYear()} abc company</span>
      </div>
    </div>
  );
};

export default Footer;
