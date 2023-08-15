import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../myinformaton";
import { logo, menu, close } from "../assets";
import { styles } from "../styles";

const Navbar = () => {
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="name-logo"></img>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
