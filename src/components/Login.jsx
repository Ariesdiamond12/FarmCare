import React from "react";
import Farm from "../assets/farm.png";

function Login() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      {/* Left Column */}
      <div className="flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto p-4">
          <h1 className="text-3xl font-medium text-center">
            Login to your Account
          </h1>
          <h3 className="text-l font-normal text-center">
            Welcome back! Enter your credentials
          </h3>
          <div className="flex flex-col py-2">
            <label>Username</label>
            <input className="" type="text" />
          </div>
          <div className="flex flex-col py-2">
            <label>Password</label>
            <input type="password" />
          </div>
          <button>Sign In</button>
          <div>
            <p>
              Don't have an account? <a href="#">Sign up</a>
            </p>
          </div>
        </form>
      </div>

      {/* Right Column */}
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={Farm} alt="" />
      </div>
    </div>
  );
}

export default Login;
