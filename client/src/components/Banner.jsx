import React from "react";
import { Link } from "react-router-dom";
import grocery from "../assets/grocery.jpg";
import burger from "../assets/burger.png";
import ingredients from "../assets/ingredients.png";

const Banner = () => {
  return (
    <div className="mt-10 md:mt-16 overflow-y-hidden flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="text-2xl xl:text-4xl font-semibold text-gray-800">
          Effortless Meal Planning Starts Here!
        </p>
        <p>Simplify Your Shopping, Master Your Meals</p>
      </div>
      <section className="grid grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 xl:gap-8 mt-8 md:mt-10 xl:mt-12 mb-8 text-center text-slate-800 mx-8">
        <div className="w-full">
          <div className="flex flex-col gap-8">
            <p className="sm:text-xl md:text-2xl font-semibold text-slate-900">
              Customizable Budgeting
            </p>
            <img src={grocery} />
            <p className="text-sm md:text-base">
              Adjust your budget based on your family's needs, dietary
              preferences, and fluctuating grocery prices
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col gap-8">
            <p className="sm:text-xl md:text-2xl font-semibold text-slate-900">
              Personalized Recommendations
            </p>
            <img src={ingredients} />
            <p className="text-sm md:text-base">
              Receive recipe suggestions based on your dietary preferences,
              cooking skill level, and ingredient availability
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col gap-8">
            <p className="sm:text-xl md:text-2xl font-semibold text-slate-900">
              Stress-Free Cooking
            </p>
            <img src={burger} />
            <p className="text-sm md:text-base">
              With all the heavy lifting taken care of, you can cook without
              worries!
            </p>
          </div>
        </div>
      </section>
      <section className="flex w-full md:w-1/2 lg:w-1/4 justify-around sm:place-self-center">
        <Link to="/sign-in">
          <button className="py-3 px-5 border flex justify-center items-center border-gray-800">
            Join Now
          </button>
        </Link>
        <Link to="/about">
          <button className="py-3 px-5 border flex justify center items-center bg-slate-800 text-gray-200">
            Learn More
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Banner;
