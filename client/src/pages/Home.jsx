import React from "react";
import { Banner, FinalBanner } from "../components";
import Hero from "../assets/Hero.jpg";
const Home = () => {
  return (
    <div>
      <section>
        <div className="relative flex flex-col justify-center items-center gap-4">
          <div className="z-10 absolute flex flex-col gap-28 items-center">
            <p className="text-5xl text-center leading-normal text-gray-50 border-2 border-white px-5 py-4 bg-black bg-opacity-20">
              Your Ultimate Shopping Sidekick <br /> Always at Your Service
            </p>
            <p className="text-gray-100 text-2xl px-3 border-x-2 border-white bg-black bg-opacity-20">
              Take Control of your shopping routine
            </p>
          </div>
          <div>
            <img src={Hero} />
          </div>
        </div>
      </section>
      <Banner />
    </div>
  );
};

export default Home;
