import React from "react";
import { HiOutlineTrophy } from "react-icons/hi2";
import { RiCustomerService2Line } from "react-icons/ri";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { AiTwotoneWallet } from "react-icons/ai";

const Support = () => {
  return (
    <div>
      <div className=" flex flex-col sm:flex sm:flex-row sm:justify-center my-4">
        <div className="bg-cream2 h-[500px] sm:h-[270px] sm:w-[1440px] mt-16 flex flex-col justify-around sm:flex sm:flex-row items-center  sm:items-center sm:justify-around">
          <div className="flex">
            <HiOutlineTrophy className="text-5xl font-extrabold" />
            <div>
              <h1 className="text-2xl font-semibold">High Quality</h1>

              <p className="text-gray">crafted from top materials</p>
            </div>
          </div>
          <div className="flex">
            <BiSolidBadgeCheck className="text-5xl font-extrabold" />
            <div>
              <h1 className="text-2xl font-semibold">Warranty Protection</h1>

              <p className="text-gray">Over 2 years</p>
            </div>
          </div>
          <div className="flex">
            <AiTwotoneWallet className="text-5xl font-extrabold" />
            <div>
              <h1 className="text-2xl font-semibold">Free Shipping</h1>

              <p className="text-gray">Order over 150 $</p>
            </div>
          </div>
          <div className="flex">
            <RiCustomerService2Line className="text-5xl font-extrabold" />
            <div>
              <h1 className="text-2xl font-semibold">24 / 7 Support</h1>

              <p className="text-gray">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
