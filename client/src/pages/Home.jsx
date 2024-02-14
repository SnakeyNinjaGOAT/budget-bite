import React from "react";
import { Banner } from "../components";
import Hero from "../assets/Hero.jpg";
import PhoneHero from "../assets/phone-hero.jpg";
const Home = () => {
  return (
    <div>
      <section>
        <div className="relative flex flex-col justify-center items-center gap-4">
          <div className="z-10 absolute flex flex-col gap-28 items-center text-center">
            <p className=" text-3xl md:text-4xl xl:text-5xl text-center leading-normal text-gray-50 border-2 md:border-white px-3 py-3 md:px-5 md:py-4 md:bg-black md:bg-opacity-20">
              Your Ultimate Shopping Sidekick <br /> Always at Your Service
            </p>
            <p className="text-gray-100 text-2xl px-3 border-x-2 border-white bg-black bg-opacity-20">
              Take Control of your shopping routine
            </p>
          </div>
          <div className="hidden md:block">
            <img src={Hero} />
          </div>
          <div className="md:hidden">
            <img src={PhoneHero} className="" />
          </div>
        </div>
      </section>
      <Banner />
    </div>
  );
};

export default Home;
