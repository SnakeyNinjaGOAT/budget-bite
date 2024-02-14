import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="">
      <div className="xl:px-20 md:px-10 sm:px-6 px-4 md:py-12 2xl:mx-auto 2xl:container md:flex items-center justify-center">
        <div className="md:hidden sm:mb-8 mb-6">
          <p>blablabla</p>
        </div>
        <div className="bg-white shadow-lg rounded xl:w-1/3 lg:w-5/12 w-full lg:px-10 sm:px-6 sm:py-10 px-2 py-6">
          <p className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">
            Login to your account
          </p>
          <p>
            Don't have and account?{" "}
            <Link to="/sign-up">
              <span className="text-blue-700"> Sign up here!</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
