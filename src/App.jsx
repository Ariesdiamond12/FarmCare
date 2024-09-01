import React from "react";
import Login from "./components/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./components/Registration.jsx";
import Home from "./components/Home.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/donate" element={<Donate />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
