import Link from "next/link";
import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import { HiOutlineTrophy } from "react-icons/hi2";
import { RiCustomerService2Line } from "react-icons/ri";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { AiTwotoneWallet } from "react-icons/ai";
import Image from "next/image";
import pic from "../../../public/pic.png";
import dot from "../../../public/dot.png";
import square from "../../../public/square.png";
import image1 from "../../../public/image 1.png";
import image2 from "../../../public/image 2.png";
import image3 from "../../../public/image 3.png";
import image4 from "../../../public/image 4.png";

const Shop = () => {
  return (
    <div>
      <div className="shop h-[316px] flex justify-center items-center">
        <br />
        <div>
          <h1 className="text-5xl font-bold">Shop</h1>
          <div className="flex">
            <Link href={"/"}>
              <p className="font-bold">Home</p>
            </Link>
            <RiArrowDropRightLine className="font-bold text-2xl" />
            <p>Shop</p>
          </div>
        </div>
      </div>
      <div className="bg-cream2 h-[100px] flex items-center justify-around">
        <div className="flex items-center gap-7">
          <Image src={pic} alt="pic" />
          <h1 className="text-xl">Filter</h1>
          <Image src={dot} alt="pic" />
          <Image src={square} alt="pic" />
          <div className="text-3xl font-bold text-gray">|</div>
          <p>Showing 1-16 of 32 results</p>
        </div>
        <div className="flex items-center gap-7">
          <h1 className="text-xl">Show</h1>
          <div className="bg-white h-[44px] w-[55px] text-gray flex justify-center items-center">
            {" "}
            16
          </div>
          <h1 className="text-xl">Short by</h1>
          <div className="bg-white h-[44px] w-[188px] text-gray flex justify-center items-center">
            {" "}
            Default
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className=" h-[2051px] w-[1200px] mt-11">
          <div className="h-[717px flex flex-col items-center  sm:h-[446px] mt-10 sm:flex sm:flex-row sm:justify-between">
            <div className=" sm:w-[285px] sm:h-[446px] ">
              <Link href={"/product"}>
                {" "}
                <Image src={image1} alt="2" className="" />
              </Link>{" "}
              <br />
              <h1 className="text-xl font-bold">Syltherine</h1>
              <p className="font-semibold text-gray">Stylish cafe chair</p>
              <div className="sm:flex sm:gap-3">
                <h1 className="text-xl font-bold">Rp 2.500.000 </h1>
                <h2 className="text-gray line-through">Rp 3.500.000</h2>
              </div>
            </div>
            <div className="sm:w-[285px] sm:h-[446px] ">
              <Link href={"/product"}>
                {" "}
                <Image src={image2} alt="2" className="" />
              </Link>{" "}
              <br />
              <h1 className="sm:text-xl sm:font-bold">Leviosa</h1>
              <p className="font-semibold text-gray">Stylish cafe chair</p>
              <div className="sm:flex sm:gap-3">
                <h1 className="text-xl font-bold">Rp 2.500.000 </h1>
                <h2 className="text-gray line-through">Rp 3.500.000</h2>
              </div>
            </div>
            <div className="sm:w-[285px] sm:h-[446px]">
              <Link href={"/product"}>
                {" "}
                <Image src={image3} alt="2" className="" />
              </Link>{" "}
              <br />
              <h1 className="text-xl font-bold">Leviosa</h1>
              <p className="font-semibold text-gray">uxury big sofa</p>
              <div className="sm:flex sm:gap-3">
                <h1 className="sm:text-xl sm:font-bold">Rp 7.000.000 </h1>
                <h2 className="text-gray line-through">Rp 14.000.000</h2>
              </div>
            </div>
            <div className="sm:w-[285px] sm:h-[446px] ">
              <Link href={"/product"}>
                {" "}
                <Image src={image4} alt="2" className="" />
              </Link>{" "}
              <br />
              <h1 className="text-xl font-bold">Respira</h1>
              <p className="font-semibold text-gray">
                Outdoor bar table and stool
              </p>
              <h1 className="sm:text-xl sm:font-bold">Rp 500.000</h1>
            </div>
          </div>
          <div className="flex flex-col items-center  sm:h-[446px] mt-10 sm:flex sm:flex-row sm:justify-between">
            <div className=" sm:w-[285px] sm:h-[446px] ">
              <Link href={"/product"}>
                {" "}
                <Image src={image1} alt="2" className="" />
              </Link>{" "}
              <br />
              <h1 className="text-xl font-bold">Syltherine</h1>
              <p className="font-semibold text-gray">Stylish cafe chair</p>
              <div className="sm:flex sm:gap-3">
                <h1 className="text-xl font-bold">Rp 2.500.000 </h1>
                <h2 className="text-gray line-through">Rp 3.500.000</h2>
              </div>
            </div>
            <div className="sm:w-[285px] sm:h-[446px] ">
              <Link href={"/product"}>
                {" "}
                <Image src={image2} alt="2" className="" />
              </Link>{" "}
              <br />
              <h1 className="sm:text-xl sm:font-bold">Leviosa</h1>
              <p className="font-semibold text-gray">Stylish cafe chair</p>
              <div className="sm:flex sm:gap-3">
                <h1 className="text-xl font-bold">Rp 2.500.000 </h1>
                <h2 className="text-gray line-through">Rp 3.500.000</h2>
              </div>
            </div>
            <div className="sm:w-[285px] sm:h-[446px]">
              <Link href={"/product"}>
                {" "}
                <Image src={image3} alt="2" className="" />
              </Link>{" "}
              <br />
              <h1 className="text-xl font-bold">Leviosa</h1>
              <p className="font-semibold text-gray">uxury big sofa</p>
              <div className="sm:flex sm:gap-3">
                <h1 className="sm:text-xl sm:font-bold">Rp 7.000.000 </h1>
                <h2 className="text-gray line-through">Rp 14.000.000</h2>
              </div>
            </div>
            <div className="sm:w-[285px] sm:h-[446px] ">
              <Link href={"/product"}>
                {" "}
                <Image src={image4} alt="2" className="" />
              </Link>{" "}
              <br />
              <h1 className="text-xl font-bold">Respira</h1>
              <p className="font-semibold text-gray">
                Outdoor bar table and stool
              </p>
              <h1 className="sm:text-xl sm:font-bold">Rp 500.000</h1>
            </div>
          </div>
          <div className="flex flex-col items-center  sm:h-[446px] mt-10 sm:flex sm:flex-row sm:justify-between">
            <div className=" sm:w-[285px] sm:h-[446px] ">
              <Link href={"/product"}>
                {" "}
                <Image src={image1} alt="2" className="" />
              </Link>{" "}
              <br />
              <h1 className="text-xl font-bold">Syltherine</h1>
              <p className="font-semibold text-gray">Stylish cafe chair</p>
              <div className="sm:flex sm:gap-3">
                <h1 className="text-xl font-bold">Rp 2.500.000 </h1>
                <h2 className="text-gray line-through">Rp 3.500.000</h2>
              </div>
            </div>
            <div className="sm:w-[285px] sm:h-[446px] ">
              <Link href={"/product"}>
                {" "}
                <Image src={image2} alt="2" className="" />
              </Link>{" "}
              <br />
              <h1 className="sm:text-xl sm:font-bold">Leviosa</h1>
              <p className="font-semibold text-gray">Stylish cafe chair</p>
              <div className="sm:flex sm:gap-3">
                <h1 className="text-xl font-bold">Rp 2.500.000 </h1>
                <h2 className="text-gray line-through">Rp 3.500.000</h2>
              </div>
            </div>
            <div className="sm:w-[285px] sm:h-[446px]">
              <Link href={"/product"}>
                {" "}
                <Image src={image3} alt="2" className="" />
              </Link>{" "}
              <br />
              <h1 className="text-xl font-bold">Leviosa</h1>
              <p className="font-semibold text-gray">uxury big sofa</p>
              <div className="sm:flex sm:gap-3">
                <h1 className="sm:text-xl sm:font-bold">Rp 7.000.000 </h1>
                <h2 className="text-gray line-through">Rp 14.000.000</h2>
              </div>
            </div>
            <div className="sm:w-[285px] sm:h-[446px] ">
              <Link href={"/product"}>
                {" "}
                <Image src={image4} alt="2" className="" />
              </Link>{" "}
              <br />
              <h1 className="text-xl font-bold">Respira</h1>
              <p className="font-semibold text-gray">
                Outdoor bar table and stool
              </p>
              <h1 className="sm:text-xl sm:font-bold">Rp 500.000</h1>
            </div>
          </div>
          <div className="flex flex-col items-center  sm:h-[446px] mt-10 sm:flex sm:flex-row sm:justify-between">
            <div className=" sm:w-[285px] sm:h-[446px] ">
              <Link href={"/product"}>
                {" "}
                <Image src={image1} alt="2" className="" />
              </Link>{" "}
              <br />
              <h1 className="text-xl font-bold">Syltherine</h1>
              <p className="font-semibold text-gray">Stylish cafe chair</p>
              <div className="sm:flex sm:gap-3">
                <h1 className="text-xl font-bold">Rp 2.500.000 </h1>
                <h2 className="text-gray line-through">Rp 3.500.000</h2>
              </div>
            </div>
            <div className="sm:w-[285px] sm:h-[446px] ">
              <Link href={"/product"}>
                {" "}
                <Image src={image2} alt="2" className="" />
              </Link>{" "}
              <br />
              <h1 className="sm:text-xl sm:font-bold">Leviosa</h1>
              <p className="font-semibold text-gray">Stylish cafe chair</p>
              <div className="sm:flex sm:gap-3">
                <h1 className="text-xl font-bold">Rp 2.500.000 </h1>
                <h2 className="text-gray line-through">Rp 3.500.000</h2>
              </div>
            </div>
            <div className="sm:w-[285px] sm:h-[446px]">
              <Link href={"/product"}>
                {" "}
                <Image src={image3} alt="2" className="" />
              </Link>{" "}
              <br />
              <h1 className="text-xl font-bold">Leviosa</h1>
              <p className="font-semibold text-gray">uxury big sofa</p>
              <div className="sm:flex sm:gap-3">
                <h1 className="sm:text-xl sm:font-bold">Rp 7.000.000 </h1>
                <h2 className="text-gray line-through">Rp 14.000.000</h2>
              </div>
            </div>
            <div className="sm:w-[285px] sm:h-[446px] ">
              <Link href={"/product"}>
                {" "}
                <Image src={image4} alt="2" className="" />
              </Link>{" "}
              <br />
              <h1 className="text-xl font-bold">Respira</h1>
              <p className="font-semibold text-gray">
                Outdoor bar table and stool
              </p>
              <h1 className="sm:text-xl sm:font-bold">Rp 500.000</h1>
            </div>
          </div>
          <div className="flex justify-center gap-5">
            <div className="bg-cream hover:bg-myColor h-[60px] w-[60px] rounded-lg flex items-center justify-center text- hover:text-white">
              {" "}
              1
            </div>
            <div className="bg-cream hover:bg-myColor h-[60px] w-[60px] rounded-lg flex items-center justify-center hover:text-white">
              {" "}
              2
            </div>
            <div className="bg-cream hover:bg-myColor h-[60px] w-[60px] rounded-lg flex items-center justify-center hover:text-white">
              {" "}
              3
            </div>
            <div className="bg-cream hover:bg-myColor h-[60px] w-[98px] rounded-lg flex items-center justify-center hover:text-white">
              {" "}
              Next
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="bg-cream2 h-[270px] w-[1440px] mt-16 flex items-center justify-around">
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

export default Shop;
