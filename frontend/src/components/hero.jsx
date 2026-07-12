import React from "react";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div
      className="hero flex items-center justify-between px-[100px]"
      style={{ height: "calc(100vh - 100px)" }}
    >
      {/* LEFT */}
      <div className="left w-[50%]">
        <h3 className="text-[60px]" style={{ lineHeight: 1 }}>
          Unlock the Secret to <span className="sp-text">Masterful</span> Programming Here.
        </h3>
        <div className="flex mt-6 items-center gap-[15px]">
          <button className="btnNormal">Get Started</button>
          <button className="btnWhite">Learn More</button>
        </div>
      </div>

      {/* RIGHT */}
      <div className="right w-[50%]">
        <img className='rounded-[20px] w-full' src={hero} alt="hero" />
      </div>
    </div>
  );
};

export default Hero; 