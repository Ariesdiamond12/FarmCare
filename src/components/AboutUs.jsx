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

  const teamMembers = [
    {
      name: "Tumisho Precious Marokane",
      role: "Fullstack Developer",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-HmAlYRaMiTx6PqSGcL9ifkAFxWHVPvhiHQ&s",
    },
    {
      name: "Charity Nhlaluko Mthombeni",
      role: "Front-end Developer",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-HmAlYRaMiTx6PqSGcL9ifkAFxWHVPvhiHQ&s",
    },
    {
      name: "Rotondwa Ramadwa",
      role: "Business Analyst",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-HmAlYRaMiTx6PqSGcL9ifkAFxWHVPvhiHQ&s",
    },
    {
      name: "Katlego Masekoameng",
      role: "Project Manager",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-HmAlYRaMiTx6PqSGcL9ifkAFxWHVPvhiHQ&s",
    },
  ];

  return (
    <div className="relative w-full">
      {/* Navbar */}
      <div className="flex justify-between items-center h-20 px-4 bg-white shadow-md z-20">
        <div>
          <h1 onClick={handleNav} className={logo ? "hidden" : "block"}>
            Binary Brains
          </h1>
        </div>
        <ul className="hidden md:flex space-x-4">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
        </ul>
        <div className="hidden md:flex">
          <button className="w-20 h-10 rounded-lg mr-10 bg-blue-500 text-white">
            Donate
          </button>
        </div>

        {/* Hamburger menu/ mobile view */}
        <div onClick={handleNav} className="md:hidden z-20">
          {nav ? <AiOutlineClose size={20} /> : <HiOutlineMenuAlt4 size={20} />}
        </div>
      </div>

      {/* Team Members Section */}
      <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <img
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              src={member.url}
              alt={`${member.name}'s photo`}
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
