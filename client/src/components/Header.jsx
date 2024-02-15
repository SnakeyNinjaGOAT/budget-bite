import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const userImg = currentUser.avatar;

  return (
    <header className="bg-fresh-500 shadow-md p-5">
      <div className="flex justify-around items-center">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-olive-700">Budget</span>
            <span className="text-white">Bite</span>
          </h1>
        </Link>
        <div className="flex space-x-5 items-center">
          <Link to="/about">
            <h1 className="font-semibold">
              <span className="text-white  sm:text-xl md:text-xl">About</span>
            </h1>
          </Link>

          {currentUser ? (
            <Link to="/profile">
              <img
                src={userImg}
                alt="profile"
                className="rounded-full h-10 w-10 object-cover"
              />
            </Link>
          ) : (
            <>
              <Link to="/sign-up">
                <h1 className="font-semibold textsm sm:text-xl">
                  <span className="text-white">Join Us</span>
                </h1>
              </Link>
              <Link to="/sign-in">
                <h1 className="font-semibold textsm sm:text-xl">
                  <span className="text-white">Log In</span>
                </h1>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
