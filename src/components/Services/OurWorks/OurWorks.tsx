import React from "react";
import { IMAGES } from "../../../../public/assets";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const OurWorks = () => {
  const ourWorks = [
    IMAGES.dummyWork1,
    IMAGES.dummyWork2,
    IMAGES.dummyWork3,
    IMAGES.dummyWork2,
    IMAGES.dummyWork1,
  ];
  return (
    <div className="shadow-our-partners py-[128px] bg-white">
      <h2 className="text-neutral-10 text-center text-5xl font-black leading-14">
        Our Works
      </h2>
      <Marquee gradient={false} speed={50} className="mt-[64px]">
        {ourWorks.map((work, index) => (
          <Image
            key={index}
            src={work}
            alt=""
            className="mr-7 w-[516px] h-[304px] rounded-[20px]"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default OurWorks;
