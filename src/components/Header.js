import React, { useState, useEffect } from "react";

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
      <h2 className="font-['Dancing Script'] logo">Abc Company</h2>
      <div className="text-lg">
        <span className="cursor-pointer link">Privacy Policy</span>
        <span className="ml-8 cursor-pointer link">Terms</span>
      </div>
    </div>
  );
};

export default Header;
