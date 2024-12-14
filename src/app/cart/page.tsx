"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RiArrowDropRightLine } from "react-icons/ri";
import logo from "../../../public/logo.png";
import sofa from "../../../public/sofa.png";
import { TbTrashFilled } from "react-icons/tb";
import Support from "../../components/support";

const Cart = () => {
  const usingRount = useRouter();
  return (
    <div>
      <div className="shop sm:h-[316px] flex flex-col items-center sm:flex sm:flex-row sm:justify-center sm:items-center leading-9">
        <br />
        <div>
          <div className="flex flex-col items-center justify-center sm:flex sm:flex-row sm:justify-center">
            <Image src={logo} alt="logo" className="" />
          </div>{" "}
          <h1 className="  text-3xl sm:text-5xl font-bold text-center">Cart</h1>
          <div className="flex  items-center sm:flex sm:flex-row sm:justify-center">
            <Link href={"/"}>
              <p className="font-bold">Home</p>
            </Link>
            <RiArrowDropRightLine className="font-bold text-3xl" />
            <p>Cart</p>
          </div>
        </div>
      </div>
      <div className="sm:flex sm:justify-center">
        <div className=" h-[525px] sm:w-[1440px] sm:flex sm:gap-5 mt-20">
          <div className=" sm:h-[215px] sm:w-[817px]">
            <div className="bg-cream2  sm:h-[55px]">
              <ul className="flex justify-around items-center font-semibold h-[55]">
                <li>Product</li>
                <li>Price</li>
                <li>Quantity</li>
                <li>Subtotal</li>
              </ul>
            </div>
            <div className="flex justify-around items-center sm:flex sm:justify-around sm:items-end">
              <div className="bg-cream2 rounded-lg h-[105px] w-[105px] mt-11 sm:flex sm:justify-center sm:items-center">
                <Link href={"product"}>
                  <Image src={sofa} alt="sofa" className="" />
                </Link>
              </div>{" "}
              <h1 className="text-gray">Asgaard sofa</h1>
              <h1 className="text-gray">Asgaard sofa</h1>
              <div className="h-[32px] w-[32px] border-[1px] border-gray rounded-lg flex justify-center items-center">
                1
              </div>
              <h1>Rs. 250,000.00</h1>
              <h1 className="font-bold text-3xl text-myColor">
                <TbTrashFilled />
              </h1>
            </div>
          </div>

          <div className="bg-cream2 h-[350px] sm:h-[390px] w-[393px] sm:w-[493] mb-6">
            <h1 className="text-4xl font-bold text-center mt-6">Cart Totals</h1>
            <br />
            <br />
            <div className="flex justify-around mt-3">
              <h1 className="font-semibold">Subtotal</h1>
              <h1 className="text-gray">Rs. 250,000.00</h1>
            </div>
            <br />
            <div className="flex justify-around mt-3">
              <h1 className="font-semibold">Total</h1>
              <h1 className="text-myColor text-2xl">Rs. 250,000.00</h1>
            </div>

            <div className="flex justify-center items-center">
              <button
                onClick={() => usingRount.push("checkout")}
                className="h-[59px] w-[222px] border-[1px] border-black text-black  text-center rounded-2xl text-2xl mt-16"
              >
                Check Out{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Support />
    </div>
  );
};

export default Cart;
