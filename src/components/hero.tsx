import React from "react";
import Image from "next/image";
import pic1 from "../../public/images/pic1.png";
const Hero = () => {
  return (
    <div>
      <div className="hero sm::w-[full] sm:h-[720px]">
        <div className=" sm:flex sm:justify-end">
          <div className="flex justify-center items-center mt-12 bg-cream h-[350px] sm:h-[443px] sm:w-[643px] sm:bg-cream rounded-lg sm:px-11 sm:py-16 sm:mt-48 sm:mr-20">
            <div className="">
              <h1 className="font-semibold text-black">New Arrival</h1>
              <br />
              <h2 className="text-myColor text-4xl sm:text-5xl font-extrabold">
                Discover Our <br /> New Collection
              </h2>
              <br />
              <p className="font-semibold text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut{" "}
                <br />
                elit tellus, luctus nec ullamcorper mattis.
              </p>
              <button className="bg-myColor text-white h-[50px] w-[122px] sm:h-[74px] sm:w-[222px] text-center font-bold mt-9 hover:bg-white hover:text-myColor">
                BUY Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
