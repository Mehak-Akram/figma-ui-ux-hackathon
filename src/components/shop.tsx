"use client";

import Link from "next/link";
import React from "react";
import { IoMdShare } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { MdCompareArrows } from "react-icons/md";
import Image from "next/image";
import image1 from "../../public/image 1.png";
import image2 from "../../public/image 2.png";
import image3 from "../../public/image 3.png";
import image4 from "../../public/image 4.png";
import { useRouter } from "next/navigation";

const Shopproduct = () => {
  const route = useRouter();

  return (
    <div>
      <div className="flex justify-center">
        <div className=" w-[1200px] mt-11">
          <div className="h-[717px flex flex-col items-center  sm:h-[446px] mt-10 sm:flex sm:flex-row sm:justify-between">
            <div className="sm:w-[285px] sm:h-[446px]  relative group">
              <Link href={"/product"}>
                <Image src={image1} alt="2" className="" />
              </Link>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => route.push("cart")}
                  className="w-[202px] h-[48px] px-4 py-1 bg-white text-myColor font-semibold"
                >
                  Add to Cart
                </button>
                <div className="flex gap-4">
                  <div className="flex text-white font-semibold items-center">
                    <IoMdShare className="text-xl" />
                    <h1 className="text-xl">Share</h1>
                  </div>
                  <div className="flex text-white font-semibold items-center">
                    <MdCompareArrows className="text-xl" />
                    <h1 className="text-xl">Compare</h1>
                  </div>
                  <div className="flex text-white font-semibold items-center">
                    <CiHeart className="text-xl" />
                    <h1 className="text-xl">Like</h1>
                  </div>
                </div>
              </div>
              <br />
              <h1 className="text-xl font-bold">Syltherine</h1>
              <p className="font-semibold text-gray">Stylish cafe chair</p>
              <div className="sm:flex sm:gap-3">
                <h1 className="text-xl font-bold">Rp 2.500.000</h1>
                <h2 className="text-gray line-through">Rp 3.500.000</h2>
              </div>
            </div>
            <div className="sm:w-[285px] sm:h-[446px]  relative group">
              <Link href={"/product"}>
                <Image src={image2} alt="2" className="" />
              </Link>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-[202px] h-[48px] px-4 py-1 bg-white text-myColor font-semibold">
                  Add to Cart
                </button>
                <div className="flex gap-4">
                  <div className="flex text-white font-semibold items-center">
                    <IoMdShare className="text-xl" />
                    <h1 className="text-xl">Share</h1>
                  </div>
                  <div className="flex text-white font-semibold items-center">
                    <MdCompareArrows className="text-xl" />
                    <h1 className="text-xl">Compare</h1>
                  </div>
                  <div className="flex text-white font-semibold items-center">
                    <CiHeart className="text-xl" />
                    <h1 className="text-xl">Like</h1>
                  </div>
                </div>
              </div>
              <br />
              <h1 className="text-xl font-bold">Leviosa</h1>
              <p className="font-semibold text-gray">Stylish cafe chair</p>
              <div className="sm:flex sm:gap-3">
                <h1 className="text-xl font-bold">Rp 2.500.000</h1>
                <h2 className="text-gray line-through">Rp 3.500.000</h2>
              </div>
            </div>
            <div className="sm:w-[285px] sm:h-[446px]  relative group">
              <Link href={"/product"}>
                <Image src={image3} alt="2" className="" />
              </Link>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => route.push("cart")}
                  className="w-[202px] h-[48px] px-4 py-1 bg-white text-myColor font-semibold"
                >
                  Add to Cart
                </button>
                <div className="flex gap-4">
                  <div className="flex text-white font-semibold items-center">
                    <IoMdShare className="text-xl" />
                    <h1 className="text-xl">Share</h1>
                  </div>
                  <div className="flex text-white font-semibold items-center">
                    <MdCompareArrows className="text-xl" />
                    <h1 className="text-xl">Compare</h1>
                  </div>
                  <div className="flex text-white font-semibold items-center">
                    <CiHeart className="text-xl" />
                    <h1 className="text-xl">Like</h1>
                  </div>
                </div>
              </div>
              <br />
              <h1 className="text-xl font-bold">Lolito</h1>
              <p className="font-semibold text-gray">Luxury big sofa</p>
              <div className="sm:flex sm:gap-3">
                <h1 className="text-xl font-bold">Rp 7.000.000</h1>
                <h2 className="text-gray line-through">Rp 14.000.000</h2>
              </div>
            </div>
            <div className="sm:w-[285px] sm:h-[446px]  relative group">
              <Link href={"/product"}>
                <Image src={image4} alt="2" className="" />
              </Link>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => route.push("cart")}
                  className="w-[202px] h-[48px] px-4 py-1 bg-white text-myColor font-semibold"
                >
                  Add to Cart
                </button>
                <div className="flex gap-4">
                  <div className="flex text-white font-semibold items-center">
                    <IoMdShare className="text-xl" />
                    <h1 className="text-xl">Share</h1>
                  </div>
                  <div className="flex text-white font-semibold items-center">
                    <MdCompareArrows className="text-xl" />
                    <h1 className="text-xl">Compare</h1>
                  </div>
                  <div className="flex text-white font-semibold items-center">
                    <CiHeart className="text-xl" />
                    <h1 className="text-xl">Like</h1>
                  </div>
                </div>
              </div>
              <br />
              <h1 className="text-xl font-bold">Respira</h1>
              <p className="font-semibold text-gray">
                Outdoor bar table and stool
              </p>
              <h1 className="text-xl font-bold">Rp 500.000</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopproduct;
