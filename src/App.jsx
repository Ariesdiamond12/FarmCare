import React from "react";
import Login from "./components/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./components/Registration.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
