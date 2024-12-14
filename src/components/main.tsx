import React from "react";
import Image from "next/image";
import pic2 from "../../public/pic2.png";
import pic3 from "../../public/pic3.png";
import pic4 from "../../public/pic4.png";

const Main = () => {
  return (
    <div className="flex flex-col items-center sm:flex sm:justify-center">
      <div className="bg-white sm:h-[685px] sm:w-[1183px] mt-16">
        <h1 className="text-3xl font-extrabold text-center">
          Browse The Range
        </h1>
        <br />
        <p className="text-center text-gray sm:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <br />
        <div className=" sm:h-[585px] sm:w-[1183px] sm:flex sm:justify-between sm:items-center rounded-lg">
          <div>
            <Image src={pic2} alt="1" className="rounded-lg" />
            <h1 className="text-center text-2xl font-bold my-4">Dining</h1>
          </div>
          <div>
            <Image src={pic3} alt="1" className="rounded-lg" />
            <h1 className="text-center text-2xl font-bold my-4">Living</h1>
          </div>
          <div>
            <Image src={pic4} alt="1" className="rounded-lg" />
            <h1 className="text-center text-2xl font-bold my-4 ">Bedroom</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
