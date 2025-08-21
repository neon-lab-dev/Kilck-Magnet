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
    <div className="shadow-our-partners container-padding bg-white">
      <h2 className="text-neutral-10 text-center heading-xl">
        Our Works
      </h2>
      <Marquee gradient={false} speed={50} className="mt-12">
        {ourWorks.map((work, index) => (
          <Image
            key={index}
            src={work}
            alt=""
            className="mr-7 w-full lg:w-[516px] h-[304px] rounded-[20px]"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default OurWorks;
