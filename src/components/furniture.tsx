import React from "react";
import Image from "next/image";
import frame4 from "../../public/frame4.png";
import Rectangle38 from "../../public/Rectangle 38.png";
import Rectangle39 from "../../public/Rectangle 39.png";
import Rectangle40 from "../../public/Rectangle 40.png";
import Rectangle37 from "../../public/Rectangle 37.png";
import Rectangle41 from "../../public/Rectangle 41.png";
import Rectangle43 from "../../public/Rectangle 43.png";
import Rectangle44 from "../../public/Rectangle 44.png";
import Rectangle45 from "../../public/Rectangle 45.png";

function Furniture() {
  return (
    <div className="sm:flex sm:justify-center mt-16">
      <div className=" sm:w-[1440px] sm:h-[780px] mb-32">
        <p className="font-semibold text-gray text-1xl text-center">
          Share your setup with
        </p>
        <h1 className="text-center text-3xl font-extrabold">
          #FuniroFurniture
        </h1>
        <div className=" ">
          <div className="flex flex-col items-center sm:flex sm:flex-row sm:justify-between">
            <Image src={frame4} alt="pic" className=" hidden" />
            <Image src={Rectangle38} alt="pic" className="sm:h-[312px]" />
            <Image src={Rectangle40} alt="pic" className="" />
            <Image src={Rectangle43} alt="pic" className="" />
            <Image src={Rectangle45} alt="pic" className="" />
          </div>
          <div className="flex flex-col items-center sm:flex sm:flex-row  sm:gap-64 sm:mt-10 ">
            <div className="sm:flex sm:gap-9">
              <Image src={Rectangle37} alt="pic" className="sm:h-[323px]" />
              <Image src={Rectangle39} alt="pic" className="sm:h-[242px]" />
            </div>

            <div className="sm:flex sm:gap-9">
              <Image src={Rectangle41} alt="pic" className="sm:h-[242px]" />
              <Image src={Rectangle44} alt="pic" className="sm:h-[196px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Furniture;
