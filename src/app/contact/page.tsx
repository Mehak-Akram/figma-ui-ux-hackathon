import Link from "next/link";
import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhone } from "react-icons/bi";
import { MdAccessTimeFilled } from "react-icons/md";
import { HiOutlineTrophy } from "react-icons/hi2";
import { RiCustomerService2Line } from "react-icons/ri";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { AiTwotoneWallet } from "react-icons/ai";
import Image from "next/image";
import logo from "../../../public/logo.png";

const Contact = () => {
  return (
    <div>
      <div className="shop h-[316px] flex justify-center items-center leading-9">
        <br />
        <div>
          <div className="flex justify-center">
            <Image src={logo} alt="logo" className="" />
          </div>{" "}
          <h1 className="text-5xl font-bold">Contact</h1>
          <div className="flex justify-center">
            <Link href={"/"}>
              <p className="font-bold">Home</p>
            </Link>
            <RiArrowDropRightLine className="font-bold text-2xl" />
            <p>Contact</p>
          </div>
        </div>
      </div>
      <div className=" h-[1144px]">
        <div className="mt-10">
          <h1 className="text-3xl font-extrabold text-center mt-8">
            Get In Touch With Us
          </h1>
          <br />
          <p className="text-gray text-center mt-4">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us <br /> An Email. Our Staff Always Be There To Help You
            Out. Do Not Hesitate!
          </p>
        </div>
        <div className="flex justify-center gap-8 mt-20">
          <div className=" h-[537px] w-[393px] px-6 py-12">
            <div className="flex flex-col gap-11">
              <div>
                <div className="flex gap-3">
                  <FaLocationDot className="text-4xl" />
                  <h1 className="text-2xl font-semibold">Address</h1>
                </div>
                <p className="ml-9">
                  236 5th SE Avenue, New <br /> York NY10000, United <br />
                  States
                </p>
              </div>
              <div>
                <div className="flex gap-3">
                  <BiSolidPhone className="text-4xl" />
                  <h1 className="text-2xl font-semibold">Phone</h1>
                </div>
                <p className="ml-9">
                  Mobile: +(84) 546-6789
                  <br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
              <div>
                <div className="flex gap-3">
                  <MdAccessTimeFilled className="text-4xl" />
                  <h1 className="text-2xl font-semibold">Working Time</h1>
                </div>
                <p className="ml-9">
                  Monday-Friday: 9:00 - <br /> 22:00 Saturday-Sunday: 9:00 -{" "}
                  <br />
                  21:00
                </p>
              </div>
            </div>
          </div>
          <div className=" h-[923px] w-[635px] flex flex-col items-center justify-center">
            <div>
              <label htmlFor="name" className="font-bold">
                Your name
              </label>
              <br />
              <br />
              <input
                type="text"
                className="h-[75px] w-[529px] bg-transparent border border-gray rounded-lg"
                id="name"
              />
            </div>

            <br />
            <br />
            <div>
              <label htmlFor="name" className="font-bold">
                Your Email
              </label>
              <br />
              <br />
              <input
                type="text"
                className="h-[75px] w-[529px] bg-transparent border border-gray rounded-lg"
                id="name"
              />
            </div>

            <br />
            <br />
            <div>
              <label htmlFor="name" className="font-bold">
                Subject
              </label>
              <br />
              <br />
              <input
                type="text"
                className="h-[75px] w-[529px] bg-transparent border border-gray rounded-lg"
                id="name"
              />
            </div>
            <br />
            <br />

            <div>
              <label htmlFor="msg" className="font-bold">
                Message
              </label>
              <br />
              <br />
              <textarea
                className="w-[529px] bg-transparent border border-gray rounded-lg"
                id="msg"
                rows={8}
              ></textarea>
            </div>
            <div>
              <button className="bg-myColor h-[55px] w-[237px] text-center font-bold mt-7 text-white mr-72">
                Submit
              </button>
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

export default Contact;
