import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import NavbarImage from "../assets/navbar.png";
import WheatImage from "../assets/wheat.png";
import Hunger from "../assets/malnutrition.png";
import CattleImage from "../assets/cows.png";
import FarmingImage from "../assets/farming.png";
import Plant from "../assets/planting.png";
import FishImage from "../assets/fish.png";
import FooterImage from "../assets/agriculture.jpg";

function Home() {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/farmers");
  };

  const handleDonateClick = () => {
    navigate("/donate");
  };

  return (
    <div className="relative w-full">
      {/* Navbar */}
      <div
        className="relative h-[70vh] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${NavbarImage})` }}
      >
        <div className="flex justify-between items-center h-20 px-4 text-white shadow-md z-20">
          <div>
            <h1 onClick={handleNav} className={logo ? "hidden" : "block"}>
              Binary Brains
            </h1>
          </div>
          <ul className="hidden md:flex">
            <li>
              <a href="#"></a>Home
            </li>
          </ul>
          <div className="hidden md:flex">
            <button
              className="w-20 h-10 rounded-lg mr-10"
              onClick={handleDonateClick}
            >
              Donate
            </button>
          </div>

          {/* Hamburger menu/ mobile view */}
          <div onClick={handleNav} className="md:hidden z-20">
            {nav ? (
              <AiOutlineClose size={20} />
            ) : (
              <HiOutlineMenuAlt4 size={20} />
            )}
          </div>
        </div>

        {/* Header */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
          <h2 className="text-3xl text-center">
            CURBING HUNGER WHILE PROMOTING <br /> AGRICULTURAL DEVELOPMENT
          </h2>
          <p className="mt-4 text-lg text-center">
            Promote sustainable agriculture to combat hunger, boost food
            security,
            <br /> enhance nutrition and support economic growth and rural
            development.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <>
        <div className="text-center mt-20">
          <h1 className="font-semibold text-2xl">
            Feeding Futures: Ending Malnutrition and Food Insecurity
          </h1>
          <p className="mt-2 text-gray-600">
            Addressing the impacts of malnutrition and food insecurity through
            sustainable agricultural solutions and community empowerment.
          </p>
        </div>
        {/* First Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full overflow-hidden gap-6 mb-0">
          {/* Left Column */}
          <div className="flex justify-center items-center px-4">
            <img
              src={Hunger}
              alt="Child affected by hunger"
              className="rounded-xl object-cover shadow-xl max-w-[630px] h-auto"
            />
          </div>
          {/* Right Column */}
          <div className="flex flex-col justify-center mr-24 space-y-4">
            <h1>Impact Of Malnutrition</h1>
            <p>
              Exploring how malnutrition affects physical growth, cognitive
              development, and overall health of children.
            </p>

            <a
              href="https://www.who.int/news-room/fact-sheets/detail/malnutrition?gad_source=1&gclid=Cj0KCQjw_sq2BhCUARIsAIVqmQszCKiQ-Hug8arfrWVYxF3OQVNd4FZNVsySO320ixaOxHnSk8DX2xcaAv0HEALw_wcB#"
              className="hover:underline font-bold"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full overflow-hidden gap-6">
          {/* Left Column */}
          <div className="flex flex-col justify-center ml-24 space-y-4">
            <h1>Eradicate Food Insecurity</h1>
            <p>
              Achieving a hunger-free world through sustainable agriculture,
              ensuring food security, improved nutrition, and empowering rural
              communities for economic growth.
            </p>

            <a
              href="https://www.worldbank.org/en/topic/agriculture/brief/food-security-update/what-is-food-security"
              className="hover:underline font-bold"
            >
              Learn More
            </a>
          </div>

          {/* Right Column */}
          <div className="flex justify-center items-center px-4">
            <img
              src={WheatImage}
              alt="Wheat"
              className="rounded-xl object-cover shadow-xl max-w-[630px] h-auto"
            />
          </div>
        </div>

        <div
          className="flex justify-start"
          style={{ transform: "translateY(-5dvh)" }}
        ></div>

        {/* Cards Section */}
        <div className="p-6 mb-12 pb-32">
          <h2 className="text-center text-2xl font-bold mb-14">
            Shop By Type Of Farmer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              onClick={handleCardClick}
            >
              <a href="/farmers">
                <img
                  className="w-full h-40 object-cover"
                  src={CattleImage}
                  alt="Card 1 Image"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-medium">Livestock Farmers</h3>
                </div>
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-full h-40 object-cover"
                src={FarmingImage}
                alt="Card 2 Image"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-medium">Crop Farmers</h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-full h-40 object-cover"
                src={Plant}
                alt="Card 3 Image"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-medium">Organic Farmers</h3>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-full h-40 object-cover"
                src={FishImage}
                alt="Card 4 Image"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-medium">Aquaculture Farmers</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer
          className="bg-cover bg-center text-white pt-12"
          style={{
            backgroundImage: `url(${FooterImage})`,
          }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Column 1 */}
              <div>
                <h3 className="text-lg font-bold mb-4">About Us</h3>
                <p className="text-sm">
                  We are dedicated to eradicating food insecurity by empowering
                  farmers with the tools and knowledge they need to succeed.
                </p>
              </div>

              {/* Column 2 */}
              <div>
                <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:underline">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      About
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3 */}
              <div>
                <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                <p className="text-sm">
                  1234 Farmer St, Agriculture City, Country
                </p>
                <p className="text-sm">Phone: +123 456 7890</p>
                <p className="text-sm">Email: info@farmersupport.com</p>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-8 border-t border-white pt-4 text-center">
              <p className="text-sm">
                &copy; 2024 Binary Brains. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </>
    </div>
  );
}

export default Home;
