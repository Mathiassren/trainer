import React from "react";
import Top from "../assets/Welcometop.jpg";
import Bottom from "../assets/Welcomebottom.jpg";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <section className="relative h-screen flex flex-col">
      <img
        src={Top}
        alt="Welcome background"
        className="object-cover h-screen absolute"
      />
      <div className="z-10 p-8 pt-60">
        <h1 className="text-[56px] font-bold text-yellow-400">
          Believe Yourself
        </h1>
        <p className="text-xl font-bold text-white mt-4"> -Train like a pro</p>
      </div>
      <div className="z-10 bottom-0 mt-auto ">
        <img src={Bottom} alt="Center" className="" />
        <div className="absolute bottom-0 w-full flex justify-center pb-8">
          <Link to="/home">
            <a className="bg-yellow-300 w-[176px] h-[50px] rounded-full flex justify-center items-center font-semibold tracking-wider text-sm shadow-lg">
              START TRAINING
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
