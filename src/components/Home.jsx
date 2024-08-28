import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Navbar from "../assets/navbar.png";

function Home() {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div className="flex justify-between items-center h-20 px-4">
      <div>
        <h1 onClick={handleNav} className={logo ? "hidden" : "block"}>
          Binary Brains
        </h1>
      </div>
      <ul className="hidden  md:flex">
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Services</li>
      </ul>
      <div className="hidden md:flex">
        <button className="w-20 h-10 rounded-lg mr-10">Donate</button>
      </div>

      {/* Hamburger menu/ mobile view */}

      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? <AiOutlineClose size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      {/* Navbar Mobile Menu/View */}

      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute left-0 top-0 w-full bg-gray-300/90 px-4 py-7 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <h1>Binary Brains</h1>
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Services</li>
          <div>
            <button className="donate-btn w-full my-4 py-4 rounded-full text-white">
              Donate
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Home;
