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
import image1 from "../../../public/image 1.png";
import image2 from "../../../public/image 2.png";
import image3 from "../../../public/image 3.png";
import image4 from "../../../public/image 4.png";

const Product = () => {
  return (
    <div>
      <div className="h-[100px] bg-cream2 flex items-center gap-5 px-56">
        <h1 className="text-gray  font-semibold">Home</h1>
        <RiArrowDropRightLine className="font-bold text-4xl" />
        <h1 className="text-gray font-semibold">Shop</h1>
        <RiArrowDropRightLine className="font-bold text-4xl" />
        <div className="font-bold text-2xl">|</div>
        <h1 className="font-semibold">Asgaard sofa</h1>
      </div>
      <div className="flex justify-center">
        <div className=" h-[820px] w-[1440px] flex justify-center">
          <div className=" h-[730px] w-[1242px] flex justify-around items-center border-b-[1px]">
            <div className=" h-[416px] w-[76px] flex flex-col justify-between">
              <div className="w-[76px] h-[80px] bg-cream2 rounded-lg flex justify-center items-center">
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
            <div className="bg-cream2 h-[500px] w-[423px] rounded-lg flex justify-center items-center">
              <Image src={blue} alt="logo" className="" />
            </div>
            <div className=" h-[730px] w-[606px] flex flex-col justify-center">
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
      <div className="flex justify-center">
        <div className=" w-[1200px] mt-11">
          <div className="h-[717px flex flex-col items-center  sm:h-[446px] mt-10 sm:flex sm:flex-row sm:justify-between">
            <div className=" sm:w-[285px] sm:h-[446px] ">
              <Image src={image1} alt="1" className="" />
              <br />
              <h1 className="text-xl font-bold">Syltherine</h1>
              <p className="font-semibold text-gray">Stylish cafe chair</p>

              <div className="sm:flex sm:gap-3">
                <h1 className="text-xl font-bold">Rp 2.500.000 </h1>
                <h2 className="text-gray line-through">Rp 3.500.000</h2>
              </div>
            </div>
            <div className="sm:w-[285px] sm:h-[446px] ">
              <Image src={image2} alt="2" className="" />
              <br />
              <h1 className="sm:text-xl sm:font-bold">Leviosa</h1>
              <p className="font-semibold text-gray">Stylish cafe chair</p>

              <div className="sm:flex sm:gap-3">
                <h1 className="text-xl font-bold">Rp 2.500.000 </h1>
                <h2 className="text-gray line-through">Rp 3.500.000</h2>
              </div>
            </div>
            <div className="sm:w-[285px] sm:h-[446px]">
              <Image src={image3} alt="2" className="" />
              <br />
              <h1 className="text-xl font-bold">Leviosa</h1>
              <p className="font-semibold text-gray">uxury big sofa</p>

              <div className="sm:flex sm:gap-3">
                <h1 className="sm:text-xl sm:font-bold">Rp 7.000.000 </h1>
                <h2 className="text-gray line-through">Rp 14.000.000</h2>
              </div>
            </div>
            <div className="sm:w-[285px] sm:h-[446px] ">
              <Image src={image4} alt="2" className="" />
              <br />
              <h1 className="text-xl font-bold">Respira</h1>
              <p className="font-semibold text-gray">
                Outdoor bar table and stool
              </p>

              <h1 className="sm:text-xl sm:font-bold">Rp 500.000</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <button className="h-[48px] w-[245px] border-[1px] border-myColor text-myColor font-bold text-center">
          Show More
        </button>
      </div>
    </div>
  );
};

export default Product;
