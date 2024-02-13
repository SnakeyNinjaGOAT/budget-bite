import React from "react";

const heading = "text-xl font-semibold";
const link = "text-base text-gray-200 mt-5";

const Footer = () => {
  return (
    <div className="flex flex-col bg-slate-800 text-white mt-20">
      <section className="flex mt-10 justify-around">
        <div>LOGO</div>
        <div className="gap-4">
          <p className={heading}>Community</p>
          <p className={link}>About us Guidelines and how to</p>
          <p className={link}>Quote from the best</p>
          <p className={link}>How to start a blog</p>
        </div>
        <div>
          <p className={heading}>Getting Started</p>
          <p className={link}> About Us</p>
          <p className={link}>Guidlines and how to</p>
          <p className={link}>Quote from the best</p>
          <p className={link}>How to start a blog</p>
          <p className={link}>Quote from the best</p>
          <p className={link}>Guildines and how to</p>
        </div>
        <div>
          <p className={heading}>Resources</p>
          <p className={link}>Accessibility</p>
          <p className={link}>Usability</p>
          <p className={link}>Design & Dev</p>
          <p className={link}>Marketplace</p>
        </div>
      </section>
      <section>
        <p>2024 The Good Food Group. All Rights Reserved</p>
      </section>
    </div>
  );
};

export default Footer;
