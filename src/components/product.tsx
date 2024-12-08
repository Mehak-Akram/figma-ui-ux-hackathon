import React from "react";
import Image from "next/image";
import image1 from "../../public/image 1.png";
import image2 from "../../public/image 2.png";
import image3 from "../../public/image 3.png";
import image4 from "../../public/image 4.png";
import image6 from "../../public/image 6.png";
import image7 from "../../public/image 7.png";
import image8 from "../../public/image 8.png";
import lamp from "../../public/lamp.png";
import Link from "next/link";

const Product = () => {
  return (
    <div className="sm:flex sm:justify-center">
      <div className=" sm:w-[1236px] sm:h-[1084px] mt-16">
        <h1 className="text-center text-3xl font-extrabold">Our Products</h1>
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
        <div className="flex  flex-col items-center sm:h-[446px] mt-10 sm:flex sm:flex-row sm:justify-between">
          <div className="sm:w-[285px] sm:h-[446px]">
            <Link href={"/product"}>
              {" "}
              <Image src={lamp} alt="2" className="" />
            </Link>{" "}
            <br />
            <h1 className="text-xl font-bold">Grifo</h1>
            <p className="font-semibold text-gray">Night lamp</p>
            <h1 className="sm:text-xl sm:font-bold">Rp 1.500.000</h1>
          </div>
          <div className="sm:w-[285px] sm:h-[446px] ">
            <Link href={"/product"}>
              {" "}
              <Image src={image6} alt="2" className="" />
            </Link>{" "}
            <br />
            <h1 className="text-xl font-bold">Muggo</h1>
            <p className="font-semibold text-gray">Small mug</p>
            <h2 className="text-xl font-bold">Rp 1.50.000</h2>
          </div>
          <div className="sm:w-[285px] sm:h-[446px] ">
            <Link href={"/product"}>
              {" "}
              <Image src={image7} alt="2" className="" />
            </Link>{" "}
            <br />
            <h1 className="text-xl font-bold">Pingky</h1>
            <p className="font-semibold text-gray">Cute bed set</p>
            <div className="sm:flex sm:gap-3">
              <h1 className="text-xl font-bold">Rp 7.000.000 </h1>
              <h2 className="text-gray line-through">Rp 14.000.000</h2>
            </div>
          </div>
          <div className="sm:w-[285px] sm:h-[446px] ">
            <Link href={"/product"}>
              {" "}
              <Image src={image8} alt="2" className="" />
            </Link>{" "}
            <br />
            <h1 className="text-xl font-bold">Potty</h1>
            <p className="font-semibold text-gray">Minimalist flower pot</p>
            <h1 className="text-xl font-bold">Rp 500.000</h1>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button className="h-[48px] w-[245px] border-[1px] border-myColor text-myColor font-bold text-center">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;