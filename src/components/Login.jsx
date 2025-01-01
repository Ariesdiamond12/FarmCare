import React, { useEffect, useState } from "react";
import Farm from "../assets/farm.png";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const d = new Date();
  let year = d.getFullYear();

  function disable_scrolling() {
    let body = document.body;
    if (location.pathname === "/login") {
      body.style.overflow = "hidden";
    }
  }

  useEffect(() => {
    disable_scrolling();
  }, []);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      // Simulate API call to authenticate user
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const userData = await response.json();
        // Store user data in local storage
        localStorage.setItem("userData", JSON.stringify(userData));
        navigate("/home");
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      setError("Error authenticating user");
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full overflow-hidden ">
        {/* Left Column */}
        <div className="flex flex-col justify-center">
          <form
            className="max-w-[400px] w-full mx-auto p-4"
            onSubmit={handleSignIn}
          >
            <h1 className="text-3xl font-normal text-center">
              Login to your Account
            </h1>
            <h3 className="text-l font-normal text-center my-2">
              Welcome back! Enter your credentials
            </h3>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <div className="flex flex-col py-2">
              <label>Username</label>
              <input
                className="border p-2 rounded-lg"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col py-2">
              <label>Password</label>
              <input
                className="border p-2 rounded-lg"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full my-5 py-2 rounded-lg bg-[#a6c48a] shadow-lg shadow-[#a6c48a] text-white"
            >
              Sign In
            </button>
            <div>
              <p>
                Don't have an account yet?{" "}
                <a className="text-[#a6c48a]" href="./Registration">
                  Sign up
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
          <p>©{year}, farmcare</p>
          <p>Terms of use</p>
        </div>
      </div>
    </>
  );
}

export default Login;
