import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../myinformaton";
import { menu, close } from "../assets";

const Navbar = () => {
  const [currPageURL, setCurrPageURL] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={"w-full flex items-center py-3 fixed top-0 bg-primary"}>
      <div className="w-full flex justify-between items-center max-w-1xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setCurrPageURL("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            className="relative left-7 w-20 object-contain"
            src={"https://media-public.canva.com/b1_lw/MAEzQDb1_lw/1/s.png"}
            alt="mohamad-logo"
            title="Welcome to Mohamad's 3D Developer Portfolio! Enjoy!"
          ></img>
        </Link>
        <ul className="relative right-10 list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((myInfo) => {
            return (
              <li
                key={myInfo.id}
                className={`${
                  currPageURL === myInfo.title
                    ? "text-white"
                    : "text-yellow-300"
                } hover:text-white hover:text-lg cursor-pointer`}
                onClick={() => {
                  setCurrPageURL(myInfo.title);
                }}
              >
                <a href={`${myInfo.id}`}>{myInfo.title}</a>
              </li>
            );
          })}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          ></img>
        </div>
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 black-gradient absolute top-20 right-0 mx-3 my-4 min-w-[140px] z-10 rounded-xl`}
        >
          <ul className="relative right-3 list-none flex flex-col gap-6">
            {navLinks.map((myInfo) => {
              return (
                <li
                  key={myInfo.id}
                  className={`${
                    currPageURL === myInfo.title
                      ? "text-white"
                      : "text-yellow-300"
                  } hover:text-white hover:text-lg cursor-pointer`}
                  onClick={() => {
                    setCurrPageURL(myInfo.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`${myInfo.id}`}>{myInfo.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
