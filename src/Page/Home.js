import React from "react";
import Signup from "./Signup";
import img from "../Assets/Img.svg";
import logo from "../Assets/Logo.svg";

const Home = () => {
  return (
    <div>
      <div class="flex px-5 md:flex-row flex-col items-center justify-between h-screen">
        <div className="h-full">
          <img class="ml-[56px] mt-[62px]" alt="hero" src={logo} />
          <img class="ml-[128px]" alt="hero" src={img} />
        </div>
        <div class="w-[516px] py-[20px] pr-[34px] h-full">
          <Signup />
        </div>
      </div>
    </div>
  );
};

export default Home;
