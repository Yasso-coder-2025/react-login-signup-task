import React from "react";
import Navbar from "./Navbar";
import { headerImage } from "../../../assets/images/images";

const Header = () => {
  return (
    <>
      <div className="absolute w-full z-10 bg-black/20 ">
        <Navbar />
      </div>
      <div className="relative">
        <div className="w-full h-84.5">
          <img
            src={headerImage}
            alt="headerImage"
            className="transform scale-x-[-1] w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
      </div>
    </>
  );
};

export default Header;
