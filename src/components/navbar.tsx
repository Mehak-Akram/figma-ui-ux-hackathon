import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import { MdOutlineManageAccounts } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GoHeart } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

//Navbar

const Navbar = () => {
  return (
    <div>
      <header className="bg-white h-[88px] sm:h-[100px]  sm:bg-white  flex justify-between  items-center  sm:flex sm:justify-around sm:items-center">
        <div className=" flex text-2xl font-extrabold ml-2 sm:flex sm:items-center sm:gap-1 sm:text-3xl sm:font-extrabold">
          <Image src={logo} alt="logo" className="" />
          <h1>Furniro</h1>
        </div>

        <ul className=" sm:flex sm:justify-between sm:font-semibold hidden sm:w-[430px]">
          <Link href={"/"}>
            {" "}
            <li>Home</li>
          </Link>{" "}
          <Link href={"/shop"}>
            {" "}
            <li>Shop</li>
          </Link>
          <li>About</li>
          <Link href={"/contact"}>
            {" "}
            <li>Contact</li>
          </Link>{" "}
        </ul>
        <div className="hidden sm:flex sm:gap-8 sm:text-4xl">
          <Link href={"/cart"}>
            <MdOutlineManageAccounts />
          </Link>
          <Link href={"/cart"}>
            <IoSearchOutline />
          </Link>
          <Link href={"/cart"}>
            <GoHeart />
          </Link>
          <Link href={"/cart"}>
            <MdOutlineShoppingCart />
          </Link>{" "}
        </div>
        <RxHamburgerMenu className="md:hidden text-4xl mr-2" />
      </header>
    </div>
  );
};

export default Navbar;
