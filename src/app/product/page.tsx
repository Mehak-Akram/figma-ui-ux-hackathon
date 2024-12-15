import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import outdoor1 from "../../../public/outdoor1.png";
import outdoor2 from "../../../public/outdoor2.png";
import outdoor3 from "../../../public/outdoor3.png";
import outdoor4 from "../../../public/outdoor4.png";
import blue from "../../../public/blue.png";
import white1 from "../../../public/white1.png";
import white2 from "../../../public/white2.png";
import Link from "next/link";
import Shopproduct from "../../components/shop";

const Product = () => {
  return (
    <div>
      <div className="h-[100px] bg-cream2 sm:flex sm:items-center gap-5 px-56">
        <Link href={"/"}>
          {" "}
          <h1 className="text-gray  font-semibold">Home</h1>
        </Link>{" "}
        <RiArrowDropRightLine className="font-bold text-4xl" />
        <Link href={"shop"}>
          {" "}
          <h1 className="text-gray font-semibold">Shop</h1>
        </Link>{" "}
        <RiArrowDropRightLine className="font-bold text-4xl" />
        <div className="font-bold text-2xl">|</div>
        <h1 className="font-semibold">Asgaard sofa</h1>
      </div>
      <div className="flex justify-center">
        <div className=" sm:h-[820px] sm:w-[1440px] sm:flex sm:justify-center">
          <div className=" sm:h-[730px] sm:w-[1242px] sm:flex sm:justify-around sm:items-center">
            <div className=" h-[416px] w-[76px] sm:flex sm:flex-col justify-between">
              <div className="sm:w-[76px] sm:h-[80px] bg-cream2 rounded-lg flex justify-center items-center">
                <Image src={outdoor1} alt="logo" className="" />
              </div>
              <div className="w-[76px] h-[80px] bg-cream2 rounded-lg flex justify-center items-center">
                <Image src={outdoor2} alt="logo" className="" />
              </div>
              <div className="w-[76px] h-[80px] bg-cream2 rounded-lg flex justify-center items-center">
                <Image src={outdoor4} alt="logo" className="" />
              </div>
              <div className="w-[76px] h-[80px] bg-cream2 rounded-lg flex justify-center items-center">
                <Image src={outdoor3} alt="logo" className="" />
              </div>
            </div>
            <div className="bg-cream2 sm:h-[500px] sm:w-[423px] rounded-lg flex justify-center items-center">
              <Image src={blue} alt="logo" className="" />
            </div>
            <div className=" sm:h-[730px] sm:w-[606px] flex flex-col justify-center">
              <h1 className="font-semibold text-4xl">Asgaard sofa</h1>
              <br />
              <h1 className="text-gray text-3xl">Rs. 250,000.00</h1>
              <br />
              <div className="flex gap-3 items-center">
                <div className="flex text-3xl text-yellow-500 gap-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="text-gray font-bold text-2xl">|</div>
                <h1 className="text-gray">5 Customer Review</h1>
              </div>
              <br />
              <p>
                Setting the bar as one of the loudest speakers in its class, the{" "}
                <br /> Kilburn is a compact, stout-hearted hero with a
                well-balanced <br /> audio which boasts a clear midrange and
                extended highs for a <br /> sound.
              </p>
              <br />
              <h1 className="text-gray font-semibold">Size</h1>
              <br />
              <div className="flex gap-4">
                <div className="bg-myColor h-[30px] w-[30px] rounded-lg text-white text-sm flex justify-center items-center">
                  L
                </div>
                <div className="bg-cream2 h-[30px] w-[30px] rounded-lg text-sm flex justify-center items-center">
                  XL
                </div>
                <div className="bg-cream2 h-[30px] w-[30px] rounded-lg text-sm flex justify-center items-center">
                  XS
                </div>
              </div>
              <br />
              <h1 className="text-gray">Color</h1>
              <br />
              <div className="flex gap-4">
                <div className="bg-purple-500 h-[30px] w-[30px] rounded-full"></div>
                <div className="bg-black h-[30px] w-[30px] rounded-full"></div>
                <div className="bg-myColor h-[30px] w-[30px] rounded-full"></div>
              </div>
              <div className="flex mt-3 gap-6">
                <button className="w-[123px] h-[64px] rounded-2xl border-[1px]">
                  - 1 +
                </button>
                <button className="w-[215px] h-[64px] rounded-2xl border-[1px]">
                  Add To Cart
                </button>
                <button className="w-[123px] h-[64px] rounded-2xl border-[1px]">
                  + Compare
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="h-[744px] w-[1440px] flex flex-col items-center justify-center mt-20 border-b-[1px]">
          <div className="flex justify-center gap-14">
            <h1 className="text-2xl">Description</h1>
            <h1 className="text-gray text-2xl">Additional Information</h1>
            <h1 className="text-gray text-2xl">Reviews [5]</h1>
          </div>
          <br />
          <br />
          <p className="text-gray font-semibold">
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and{" "}
            <br /> sound of Marshall, unplugs the chords, and takes the show on
            the road.
          </p>
          <br />
          <br />
          <p className="text-gray font-semibold">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest{" "}
            <br /> speakers in its class, the Kilburn is a compact,
            stout-hearted hero with a well-balanced audio which boasts a clear
            midrange <br /> and extended highs for a sound that is both
            articulate and pronounced. The analogue knobs allow you to fine tune
            the controls <br /> to your personal preferences while the
            guitar-influenced leather strap enables easy and stylish travel.
          </p>
          <div className="flex gap-6 mt-5">
            <div className="h-[358px] w-[605px] bg-cream2 rounded-lg flex justify-center items-center">
              <Image src={white1} alt="sofa" className="" />
            </div>
            <div className="h-[358px] w-[605px] bg-cream2 rounded-lg flex justify-center items-center">
              <Image src={white2} alt="sofa" className="" />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center font-semibold text-3xl mt-8">
        Related Products
      </h1>
      <Shopproduct />
      <div className="flex justify-center ">
        <button className="h-[48px] w-[245px] border-[1px] border-myColor text-myColor font-bold text-center">
          Show More
        </button>
      </div>
    </div>
  );
};

export default Product;
