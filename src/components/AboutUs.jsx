import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

function AboutUs() {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div className="relative w-full">
      {/* Navbar */}
      <div className="flex justify-between items-center h-20 px-4 bg-white shadow-md z-20">
        <div>
          <h1 onClick={handleNav} className={logo ? "hidden" : "block"}>
            Binary Brains
          </h1>
        </div>
        <ul className="hidden md:flex">
          <li>
            <a href="/home"></a>Home
          </li>
          <li>
            <a href=""></a>About
          </li>
          <li>
            <a href=""></a>Services
          </li>
        </ul>
        <div className="hidden md:flex">
          <button className="w-20 h-10 rounded-lg mr-10">Donate</button>
        </div>

        {/* Hamburger menu/ mobile view */}
        <div onClick={handleNav} className="md:hidden z-20">
          {nav ? <AiOutlineClose size={20} /> : <HiOutlineMenuAlt4 size={20} />}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
