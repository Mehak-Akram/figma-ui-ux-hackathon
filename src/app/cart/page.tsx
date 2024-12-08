import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RiArrowDropRightLine } from "react-icons/ri";
import logo from "../../../public/logo.png";
import sofa from "../../../public/sofa.png";
import { TbTrashFilled } from "react-icons/tb";
import { HiOutlineTrophy } from "react-icons/hi2";
import { RiCustomerService2Line } from "react-icons/ri";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { AiTwotoneWallet } from "react-icons/ai";





const Cart = () => {
  return (
    <div>
        <div className="shop h-[316px] flex justify-center items-center leading-9">
        <br />
        <div>
          <div className="flex justify-center">
            <Image src={logo} alt="logo" className="" />
          </div>{" "}
          <h1 className="text-5xl font-bold">Cart</h1>
          <div className="flex justify-center">
            <Link href={"/"}>
              <p className="font-bold">Home</p>
            </Link>
            <RiArrowDropRightLine className="font-bold text-2xl" />
            <p>Cart</p>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className=' h-[525px] w-[1440px] flex gap-5 mt-20'>
            <div className=' h-[215px] w-[817px]'> 
                <div className='bg-cream2 h-[55px]'>
                  <ul className='flex justify-around items-center font-semibold h-[55]'>
                    <li>Product</li>
                    <li>Price</li>
                    <li>Quantity</li>
                    <li>Subtotal</li>
                  </ul>
                </div>
                <div className='flex justify-around items-end'>
<div className='bg-cream2 rounded-lg h-[105px] w-[105px] mt-11 flex justify-center items-center'>
<Image src={sofa} alt="logo" className="" />
</div>                <h1 className='text-gray'>Asgaard sofa</h1>
                <h1 className='text-gray'>Asgaard sofa</h1>
                <div className='h-[32px] w-[32px] border-[1px] border-gray rounded-lg flex justify-center items-center'>1</div>
                <h1>Rs. 250,000.00</h1>
                <h1 className='font-bold text-3xl text-myColor'>
                <TbTrashFilled />
                </h1>


                </div>
                      </div>

                
            <div className='bg-cream2 h-[390px] w-[393]'>
              <h1 className='text-4xl font-bold text-center mt-6'>Cart Totals</h1>
              <br />
              <br />
              <div className='flex justify-around mt-3'>
                <h1 className='font-semibold'>Subtotal</h1>
                <h1 className='text-gray'>Rs. 250,000.00</h1>
              </div>
              <br />
              <div className='flex justify-around mt-3'>
                <h1 className='font-semibold'>Total</h1>
                <h1 className='text-myColor text-2xl'>Rs. 250,000.00</h1>
              </div>

              <div className='flex justify-center items-center'>
              <button className="h-[59px] w-[222px] border-[1px] border-black text-black  text-center rounded-lg text-2xl mt-16">
              Check Out          </button>
              </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center">
        <div className="bg-cream2 h-[270px] w-[1440px] mt-10 flex items-center justify-around">
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

  )
}

export default Cart