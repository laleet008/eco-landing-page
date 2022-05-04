import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["header"];
  if (scrolled) {
    navbarClasses.push("header-scroll");
  }

  return (
    <div className={navbarClasses.join(" ")}>
      <Link to="/">
        <h2 className="font-['Dancing Script'] logo">Abc Company</h2>
      </Link>
      <div className="text-lg flex ">
        <Link to="/privacy">
          <span className="cursor-pointer link">Privacy Policy</span>
        </Link>
        <Link to="/terms">
          <span className="ml-8 cursor-pointer link">Terms</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
