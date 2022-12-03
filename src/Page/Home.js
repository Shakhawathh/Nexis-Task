import React, { useState } from "react";
import Signup from "./Signup";
import img from "../Assets/Img.svg";
import logo from "../Assets/Logo.svg";
import Login from "./Login";

const Home = () => {
  const [authSection, setAuthSection] = useState("login");
  return (
    <div>
      <div class="flex px-5 md:flex-row flex-col items-center justify-between h-screen ">
        <div className="h-full">
          <img class="ml-[56px] mt-[62px]" alt="hero" src={logo} />
          <img class="ml-[128px]" alt="hero" src={img} />
        </div>
        <div class="w-[516px] py-[20px] pr-[34px] h-full">
          {authSection === "login" && (
            <Login switchAuth={() => setAuthSection("signup")} />
          )}
          {authSection === "signup" && (
            <Signup switchAuth={() => setAuthSection("login")} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
