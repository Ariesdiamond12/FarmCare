import React from "react";
import { useNavigate } from "react-router-dom";
import Flower from "../assets/lotus.jpg";

function Donate() {
  const navigate = useNavigate();
  return (
    <div
      className="h-screen w-full bg-cover bg-zinc-900/90 mix-blend-overlay bg-no-repeat relative bg-center object-fit-contain"
      style={{ backgroundImage: `url(${Flower})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0"></div>
      <div className="flex justify-center items-center h-full relative z-10">
        <form action=""></form>
      </div>
    </div>
  );
}

export default Donate;
