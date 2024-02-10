import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-fresh-500 shadow-md p-5">
      <div className="flex justify-around">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-olive-700">Budget</span>
            <span className="text-white">Bite</span>
          </h1>
        </Link>
        <div className="flex space-x-5">
          <Link to="/about">
            <h1 className="font-semibold textsm sm:text-xl">
              <span className="text-white">About</span>
            </h1>
          </Link>
          <Link to="/sign-up">
            <h1 className="font-semibold textsm sm:text-xl">
              <span className="text-white">Join Us</span>
            </h1>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
