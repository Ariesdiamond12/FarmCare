import React from "react";

function Home() {
  return (
    <div className="flex justify-between items-center h-20 ">
      <div>
        <h1>Binary Brains</h1>
      </div>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Services</li>
      </ul>
      <div>
        <button>Donate</button>
      </div>
    </div>
  );
}

export default Home;
