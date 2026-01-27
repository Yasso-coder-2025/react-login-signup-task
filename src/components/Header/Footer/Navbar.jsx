import React from "react";
import { bookIcon } from "../../../assets/icon/icons";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
      <nav className="px-35 py-5 bg-white/20 flex justify-between">
        <div className="flex">
          <div className="flex items-center pe-6 border-r border-r-white/30">
            <div className="w-7 h-8 pr-2">
              <img className="w-full h-full" src={bookIcon} alt="bookIcon" />
            </div>
            <Link to={'/'} className="text-white">Bookshop</Link>
          </div>
          <ul className="flex justify-center items-center pl-6 text-white gap-10">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Books</li>
            <li className="cursor-pointer">About us</li>
          </ul>
        </div>
        <div className="buttons flex gap-5.75">
          <Link to={'/'} className="px-4 py-2.5 bg-(--mainColor) text-white rounded-lg cursor-pointer border border-(--mainColor) hover:bg-white hover:text-(--mainColor)  duration-300">
            Log in
          </Link>
          <Link to={'/SignUp'} className="px-4 py-2.5 bg-white text-(--mainColor) rounded-lg cursor-pointer border border-(--mainColor) hover:bg-(--mainColor) hover:text-white  duration-300">
            Sign Up
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
