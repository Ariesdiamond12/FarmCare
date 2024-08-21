import React, { useEffect } from "react";
import Farm from "../assets/farm.png";
import { useLocation } from "react-router-dom";

function Registration() {
  const d = new Date();
  let year = d.getFullYear();

  const location = useLocation();
  function disable_scrolling() {
    let body = document.body;
    if (location.pathname == "/registration") {
      body.style.overflow = "hidden";
    }
  }

  useEffect(() => {
    disable_scrolling();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full overflow-hidden">
        {/* Left Column */}
        <div className="flex flex-col justify-center">
          <form className="max-w-[400px] w-full mx-auto p-4">
            <h1 className="text-3xl font-normal text-center">
              Create an Account
            </h1>
            <div className="flex flex-col py-2">
              <label>Name</label>
              <input className="border p-2 rounded-lg" type="text" />
            </div>
            <div className="flex flex-col py-2">
              <label>Surname</label>
              <input className="border p-2 rounded-lg" type="text" />
            </div>
            <div className="flex flex-col py-2">
              <label>Email Address</label>
              <input className="border p-2 rounded-lg" type="text" />
            </div>
            <div className="flex flex-col py-2">
              <label>Password</label>
              <input className="border p-2 rounded-lg" type="password" />
            </div>
            <button className=" w-full my-5 py-2 rounded-lg bg-[#a6c48a] shadow-lg shadow-[#a6c48a] text-white">
              Create Account
            </button>
            <div>
              <p>
                Already have an account yet?{" "}
                <a className="text-[#a6c48a]" href="./Login">
                  Sign in
                </a>
              </p>
            </div>
          </form>
        </div>

        {/* Right Column */}
        <div
          className="hidden sm:block mx-3 my-2 rounded-xl"
          style={{
            backgroundImage: `url(${Farm})`,
            backgroundSize: "cover",
          }}
        >
          <p className="text-[3rem] text-white text-center mt-[85dvh]">
            Let's end hunger together
          </p>
        </div>
      </div>
      <div
        className="flex justify-start"
        style={{ transform: "translateY(-5dvh)" }}
      >
        <div className="flex justify-between font-light text-gray-500 w-[40dvw] ms-10">
          <p>©{year}, zerohunger</p>
          <p>Terms of use</p>
        </div>
      </div>
    </>
  );
}

export default Registration;
