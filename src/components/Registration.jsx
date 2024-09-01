import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Field from "../assets/field.jpg";

function Registration() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Simulate API call to register user
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, surname, email, password }),
      });

      if (response.ok) {
        const userData = await response.json();
        // Store user data in local storage
        localStorage.setItem("userData", JSON.stringify(userData));
        navigate("/login");
      } else {
        setError("Error registering user");
      }
    } catch (error) {
      setError("Error registering user");
    }
  };

  return (
    <>
      <div
        className="h-screen w-full bg-cover bg-zinc-900/90 mix-blend-overlay bg-no-repeat relative bg-center object-fit-contain"
        style={{ backgroundImage: `url(${Field})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0"></div>
        <div className="flex justify-center items-center h-full relative z-10">
          <form className="max-w-[400px] w-full rounded-md mx-auto bg-white p-8 mx-5">
            <h2 className="text-4xl font-semibold text-center py-8">
              Get Started
            </h2>
            <div className="flex flex-col py-2">
              <label>Name</label>
              <input
                className="border p-2 rounded-lg"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col py-2">
              <label>Surname</label>
              <input
                className="border p-2 rounded-lg"
                type="text"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </div>
            <div className="flex flex-col py-2">
              <label>Email Address</label>
              <input
                className="border p-2 rounded-lg"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            {error && <div className="text-red-500">{error}</div>}
            <button
              className="w-full my-4 py-4 rounded-full bg-[#a6c48a] shadow-lg shadow-[#a6c48a] text-white"
              onClick={handleRegister}
            >
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
      </div>
    </>
  );
}

export default Registration;
