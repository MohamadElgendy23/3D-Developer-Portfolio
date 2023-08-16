import React, { useState } from "react";
import { Link } from "react-router-dom";
//import { navLinks } from "../myinformaton";
//import { menu, close } from "../assets";
import { styles } from "../styles";

const Navbar = () => {
  const [currPageLocation, setCurrPageLocation] = useState("");

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setCurrPageLocation("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            className="w-20 h-20 object-contain"
            src={"https://media-public.canva.com/b1_lw/MAEzQDb1_lw/1/s.png"}
            alt="mohamad-logo"
          ></img>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
