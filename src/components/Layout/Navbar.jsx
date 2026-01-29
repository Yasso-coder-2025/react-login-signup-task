import React from "react";
import { Link } from "react-router";
import { bookIcon } from "../../assets/icon/icons";
import { headerImage} from "../../assets/images/images";
import Button from "../../common/Button";

const Navbar = () => {
  return (
    <>
    <div className="absolute w-full z-10 bg-black/20 ">
      <nav className="px-35 py-5 bg-white/20 flex justify-between">
        <div className="flex">
          <div className="flex items-center pe-6 border-r border-r-white/30">
            <div className="w-7 h-8 pr-2">
              <img className="w-full h-full" src={bookIcon} alt="bookIcon" />
            </div>
            <Link to={"/"} className="text-white">Bookshop</Link>
          </div>
          <ul className="flex justify-center items-center pl-6 text-white gap-10">
            <Link to={"/"} className="cursor-pointer">Home</Link>
            <Link to={"/Books"} className="cursor-pointer">Books</Link>
            <Link to={"/AboutUs"} className="cursor-pointer">About us</Link>
          </ul>
        </div>
        <div className="buttons flex gap-5.75">
          <Link to={"/Login"} className="px-4 py-2.5 bg-(--mainColor) text-white rounded-lg cursor-pointer border border-(--mainColor) hover:bg-white hover:text-(--mainColor)  duration-300">
            Log in
          </Link>
          <Link to={"/SignUp"} className="px-4 py-2.5 bg-white text-(--mainColor) rounded-lg cursor-pointer border border-(--mainColor) hover:bg-(--mainColor) hover:text-white  duration-300">
            Sign Up
          </Link>
        </div>
      </nav>
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

export default Navbar;

