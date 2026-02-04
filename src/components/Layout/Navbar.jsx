import React from "react";
import { Link } from "react-router";
// import { bookIcon } from "../../assets/icon/icons";
import { headerImage, LogoImage} from "../../assets/images/images";
import Button from "../../common/Button";
import Header from "./Header";

const Navbar = () => {
  return (
    <>
    <div className="absolute w-full z-3 bg-black/20 ">
      <nav className="px-35 py-5 bg-white/20 flex justify-between">
        <div className="flex items-center">
          <div className="flex items-center pe-6 border-r border-r-white/30">
            <Link to={"/"}>
              <img className="w-full h-full" src={LogoImage} alt="bookIcon" />
            </Link>
          </div>
          <ul className="flex justify-center items-center pl-6 text-white gap-10">
            <Link to={"/"} className="cursor-pointer">Home</Link>
            <Link to={"/Books"} className="cursor-pointer">Books</Link>
            <Link to={"/AboutUs"} className="cursor-pointer">About us</Link>
          </ul>
        </div>
        <div className="buttons flex gap-5.75">
          <Link to={"/Login"}>
           <Button className="text-white hover:bg-white hover:text-(--mainColor)  duration-300">
            Log in
           </Button>
          </Link>
          <Link to={"/SignUp"}>
            <Button className="bg-white text-(--mainColor) hover:bg-(--mainColor) hover:text-white  duration-300">
            Sign Up
            </Button>
          </Link>
        </div>
      </nav>
    </div>
    <Header/>
    </>
  );
};

export default Navbar;

